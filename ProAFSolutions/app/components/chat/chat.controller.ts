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
        initHub(): void;
    }



    class ChatController implements IChatController {


        static $inject = ['$scope', 'ngAudio'];

        public isVisible: boolean;
        public roomName: string;
        public welcomeMessage: string;
        public message: string;
        public conversation: Array<models.IChatMessage>;
        public sounds: Array<NgAudioObject>;
        public soundEnabled: boolean;
        public chatRoomHub: ChatRoomHub;

        constructor(private $scope: ng.IScope, private ngAudio: ngAudio) {
            this.init();
        }

        init(): void {
            this.isVisible = false;
            this.welcomeMessage = 'Put something here';
            this.message = '';
            this.conversation = new Array<models.IChatMessage>();
            this.roomName = '';
            //this.initHub();
            this.loadSounds();
        }

        public initHub(): void {

            this.chatRoomHub = $.connection.chatRoomHub;

            this.chatRoomHub.client.getMessage = (name: string, message: string) => {
                this.isVisible = true;
                this.conversation.push(new models.ChatMessage(name, message, new Date().toTimeString(), ""));
                this.sounds[1].play();
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
                this.message = '';
                this.sounds[0].play();               
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

        private loadSounds(): void {
            this.soundEnabled = true;
            this.sounds = new Array<NgAudioObject>(2);
            this.sounds.push(this.ngAudio.load(AppSettings.MP3_FILE_SEND));
            this.sounds.push(this.ngAudio.load(AppSettings.MP3_FILE_RECEIVE));
        }
       
    }

    angular.module("proafsolutions").controller("ChatController", ChatController);
}