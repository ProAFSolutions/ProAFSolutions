namespace proafsolutions {

    
    
    interface IChatController {

        isVisible: boolean;
        roomName: string;
        message: string;
        welcomeMessage: string;
        conversation: Array<models.IChatMessage>;
        sounds: Array<NgAudioObject>;
        soundEnabled: boolean;
        chatRoomHub: ChatRoomHub;

        //Actions
        showWelcomeMessage(): void;
        showClick(): void;
        hideClick(): void;
        send(): void;
        enableSound(): void;
        playSound(action: string): void; //action: send|receive
        initHub(): void;
    }



    class ChatController implements IChatController {


        static $inject = ['$scope'];

        public isVisible: boolean;
        public roomName: string;
        public welcomeMessage: string;
        public message: string;
        public conversation: Array<models.IChatMessage>;
        public sounds: Array<NgAudioObject>;
        public soundEnabled: boolean;
        public chatRoomHub: ChatRoomHub;

        constructor(private $scope: ng.IScope) {
            this.init();
        }

        init(): void {
            this.isVisible = false;
            this.welcomeMessage = 'Put something here';
            this.message = '';
            this.conversation = new Array<models.IChatMessage>();
            this.roomName = '';
            this.soundEnabled = true; 
            //this.initHub();             
        }

        public initHub(): void {

            this.chatRoomHub = $.connection.chatRoomHub;

            this.chatRoomHub.client.getMessage = (name: string, message: string) => {
                this.isVisible = true;
                this.conversation.push(new models.ChatMessage(name, message, new Date().toTimeString(), ""));
                this.playSound("receive");
                this.$scope.$apply();
            };

            $.connection.hub.start().done(() => {
                this.chatRoomHub.server.joinRoom(this.roomName);
                console.log("Connected");
            }).fail(() => {
                this.chatRoomHub = null;
                console.log("Connection failed");
            });
        }

        public showWelcomeMessage(): void {
           
        }

        public send(): void {
            if (this.chatRoomHub) {
                this.chatRoomHub.server.sendMessage("", "", "");
                this.playSound("send");
                this.message = '';                        
            }           
        }
        
        public showClick(): void {
            this.isVisible = true;
        }

        public hideClick(): void {
            this.isVisible = false;
        }

        public enableSound(): void {
            this.soundEnabled = !this.soundEnabled;
        }

        //action: send|receive
        public playSound(action: string): void {
            var audioFile: any;
            audioFile = action == "send" ? document.getElementById("sound-send")
                                         : document.getElementById("sound-receive");
            audioFile.play();
        }
       
    }

    angular.module("proafsolutions").controller("ChatController", ChatController);
}