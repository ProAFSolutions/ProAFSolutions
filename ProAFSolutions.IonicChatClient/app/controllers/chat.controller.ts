namespace proafsolutions.chat {

    interface IChatMessage {
        name: string;
        roomName: string;
        text: string;
        datetime: string;
        avatarUrl: string;
    }

    class ChatMessage implements IChatMessage {

        public roomName: string;

        constructor(public name: string,
            public text: string,
            public datetime: string,
            public avatarUrl: string) {
        }
    }

    interface IChatParams extends angular.ui.IStateParamsService {
        name: string;
        room: string;
    }

    interface IChatController {
        isJoined: boolean;
        name: string;
        roomName: string;      
        message: string;
        chatRoomHub: ChatRoomHub;
        conversation: Array<IChatMessage>;

        //Actions
        join(): void;       
        send(): void;      
        initHub(): void;

    }

    export class ChatController implements IChatController {

        public $inject = ['$scope', '$stateParams', '$cordovaNativeAudio'];
       
        public isJoined: boolean;
        public name: string;
        public roomName: string;      
        public message: string
        public chatRoomHub: ChatRoomHub;
        public conversation: Array<IChatMessage>;
       
        constructor(private $scope: ng.IScope,
                    private $stateParams: IChatParams,
                    private $cordovaNativeAudio: any) {
            this.init();  
        }

        init(): void {
            this.name = this.$stateParams.name;
            this.roomName = this.$stateParams.room;
            this.message = '';
            this.conversation = new Array<IChatMessage>();
            this.initHub();
        }

        public initHub(): void {

            try {
                $.connection.hub.url = AppSettings.API_HUBS_URL;
                this.chatRoomHub = $.connection.chatRoomHub;
                this.chatRoomHub.client.getMessage = (name: string, message: string) => {                   
                    this.conversation.push(new ChatMessage(name, message, new Date().toTimeString(), ""));                    
                    this.$scope.$apply();
                    this.playSound('receive');        
                };

            } catch (ex) {
                console.error("Coudn't reach the server , check if the server is running");
            }
        }

        public join(): void {           
            $.connection.hub.start().done(() => {         
                this.chatRoomHub.server.joinRoomFromAdminApp(this.roomName);   
                this.isJoined = true; 
                this.playSound('welcome');          
            }).fail(() => {
                this.chatRoomHub = null;              
            });
        }

        public send(): void {
            if (this.isJoined && this.roomName) {
                this.chatRoomHub.server.sendMessage(this.name, this.message, this.roomName);
                this.playSound('send');        
                this.message = '';
            }
        }

        public playSound(audio: string): void {
            if (AppSettings.CURRENT_RUN_MODE == RUN_MODE.MOBILE) {
                this.$cordovaNativeAudio.play(audio);        
            }
        }       
    }
    
    angular.module("proafsolutions").controller("ChatController", ChatController);

}