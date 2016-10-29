namespace proafsolutions {


    interface IChatController {
        access: number;
        isVisible: boolean;
        isJoined: boolean;
        name: string; //user name
        roomName: string; //Email
        message: string;
        showWaitingMessage: boolean;
        conversation: Array<models.IChatMessage>;       
        soundEnabled: boolean;
        chatRoomHub: any;

        //Actions
        join(): void;
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

        public access: number;
        public isVisible: boolean;
        public isJoined: boolean;
        public name: string;
        public roomName: string;
        public showWaitingMessage: boolean;
        public message: string;
        public conversation: Array<models.IChatMessage>;        
        public soundEnabled: boolean;
        public chatRoomHub: ChatRoomHub;

        constructor(private $scope: ng.IScope) {
            this.init();
        }

        init(): void {
            this.access = 0;
            this.isVisible = false;
            this.isJoined = false;
            this.showWaitingMessage = false;           
            this.conversation = new Array<models.IChatMessage>();
            this.name = '';
            this.roomName = '';
            this.message = '';
            this.soundEnabled = true; 
            this.initHub();             
        }

        public initHub(): void {
            $.connection.hub.url = AppSettings.API_HUBS_URL;
            this.chatRoomHub = $.connection.chatRoomHub;

            this.chatRoomHub.client.getMessage = (name: string, message: string) => {
                this.isVisible = true;
                this.conversation.push(new models.ChatMessage(name, message, new Date().toTimeString(), ""));
                this.playSound("receive");
                this.$scope.$apply();
            };            
        }

        public join(): void {
            $.connection.hub.start().done(() => {
                console.log("Hub connected!!!");
                this.chatRoomHub.server.joinRoom(this.roomName);
                this.isJoined = true;
                this.showWelcomeMessage();
            }).fail(() => {
                this.chatRoomHub = null;
                console.log("Connection failed");
            });
        }

        public showWelcomeMessage(): void {
            let _this = this;
            setTimeout(() => {
                _this.showWaitingMessage = true;
                _this.$scope.$apply();
                _this.playSound("receive");
            }, 3000);
        }

        public send(): void {
            if (this.isJoined && this.roomName && this.name) {
                this.chatRoomHub.server.sendMessage(this.name, this.message, this.roomName);
                this.playSound("send");
                this.message = '';                        
            }           
        }
        
        public showClick(): void {
            this.isVisible = true;
            if (this.access == 0)
                this.playSound("welcome");

            this.access++;
        }

        public hideClick(): void {
            this.isVisible = false;
        }

        public enableSound(): void {
            this.soundEnabled = !this.soundEnabled;
        }

        //action: send|receive
        public playSound(action: string): void {
            if (this.soundEnabled) {    
                var audioFile = null;
                switch (action) {
                    case "welcome": {
                        audioFile = document.getElementById("sound-welcome");
                    } break;

                    case "send": {
                        audioFile = document.getElementById("sound-send");
                    } break;

                    case "receive": {
                        audioFile = document.getElementById("sound-receive");
                    } break;
                }               
                (<NgAudioObject>audioFile).play();
            }
        }       
    }

    angular.module("proafsolutions").controller("ChatController", ChatController);
}