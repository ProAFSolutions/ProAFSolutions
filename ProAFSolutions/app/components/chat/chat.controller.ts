namespace proafsolutions {


    //interface IChatController {
    //    access: number;
    //    isVisible: boolean;
    //    isJoined: boolean;
    //    isLoading: boolean;
    //    name: string; //user name
    //    room: string; //Email
    //    message: string;
    //    showWaitingMessage: boolean;
    //    conversation: Array<models.IChatMessage>;       
    //    soundEnabled: boolean;
    //    chatRoomHub: any;

    //    //Actions
    //    join(): void;
    //    showWelcomeMessage(): void;
    //    showClick(): void;
    //    hideClick(): void;
    //    send(): void;
    //    enableSound(): void;
    //    playSound(action: string): void; //action: send|receive
    //    initHub(): void;
    //    emailConversationClick(): void;
    //    saveConversationClick(): void;
    //    messageTextKeyPress(e): void;
    //}

    //class ChatController implements IChatController {

    //    static $inject = ['$scope', '$chatService'];

    //    public access: number;
    //    public isVisible: boolean;
    //    public isJoined: boolean;
    //    public isLoading: boolean;
    //    public name: string;
    //    public room: string;
    //    public showWaitingMessage: boolean;
    //    public message: string;
    //    public conversation: Array<models.IChatMessage>;        
    //    public soundEnabled: boolean;
    //    public chatRoomHub: ChatRoomHub;

    //    constructor(private $scope: ng.IScope, protected $chatService: services.IChatService) {
    //        this.init();
    //    }

    //    init(): void {
    //        this.access = 0;
    //        this.isVisible = false;
    //        this.isJoined = false;
    //        this.isLoading = false;
    //        this.showWaitingMessage = false;           
    //        this.conversation = new Array<models.IChatMessage>();
    //        this.name = '';
    //        this.room = '';
    //        this.message = '';
    //        this.soundEnabled = true; 
    //        this.initHub();             
    //    }

    //    public initHub(): void {

    //        try {

    //            $.connection.hub.url = AppSettings.API_HUBS_URL;
    //            this.chatRoomHub = $.connection.chatRoomHub;

    //            this.chatRoomHub.client.getMessage = (name: string, message: string) => {
    //                this.isVisible = true;
    //                this.conversation.push(new models.ChatMessage(name, message, new Date().toTimeString(), ""));
    //                this.playSound("receive");
    //                this.$scope.$apply();
    //            };
    //        } catch (ex){
    //            console.log("Coudn't reach the server , check if the server is running");
    //        }                    
    //    }

    //    public join(): void {
    //        this.isLoading = true;
    //        $.connection.hub.start().done(() => {
    //            this.isLoading = false;
    //            this.chatRoomHub.server.joinRoom(this.name, this.room);
    //            this.isJoined = true;
    //            this.showWelcomeMessage();
    //        }).fail(() => {
    //            this.chatRoomHub = null;
    //            console.log("Connection failed");
    //        });
    //    }

    //    public showWelcomeMessage(): void {
    //        let _this = this;
    //        setTimeout(() => {
    //            _this.showWaitingMessage = true;
    //            _this.$scope.$apply();
    //            _this.playSound("receive");
    //        }, 3000);
    //    }

    //    public send(): void {
    //        if (this.isJoined && this.room && this.name) {
    //            this.chatRoomHub.server.sendMessage(this.name, this.message, this.room);
    //            this.playSound("send");
    //            this.message = '';                        
    //        }           
    //    }
        
    //    public showClick(): void {
    //        this.isVisible = true;
    //        if (this.access == 0)
    //            this.playSound("welcome");

    //        this.access++;
    //    }

    //    public hideClick(): void {
    //        this.isVisible = false;
    //    }

    //    public enableSound(): void {
    //        this.soundEnabled = !this.soundEnabled;
    //    }

    //    //action: send|receive
    //    public playSound(action: string): void {
    //        if (this.soundEnabled) {    
    //            var audioFile = null;
    //            switch (action) {
    //                case "welcome": {
    //                    audioFile = document.getElementById("sound-welcome");
    //                } break;

    //                case "send": {
    //                    audioFile = document.getElementById("sound-send");
    //                } break;

    //                case "receive": {
    //                    audioFile = document.getElementById("sound-receive");
    //                } break;
    //            }               
    //            (<NgAudioObject>audioFile).play();
    //        }
    //    }    
        
    //    public emailConversationClick(): void {
    //        this.$chatService.emailConversation({ room: this.room, messages: this.conversation })
    //            .then((response: ng.IHttpPromiseCallbackArg<{}>) => {
    //                alert("chat conversation was emailed successfully");
    //            },
    //            (error: ng.IHttpPromiseCallbackArg<{}>) => {
    //                alert("Sorry an error has occurred. Please try again if the problem persists contact the administrator.");
    //            });
    //    }   

    //    public messageTextKeyPress(e): void {
    //        if (e.keyCode == '13') {
    //            this.send();
    //        }
    //    }


    //    public saveConversationClick(): void {

    //        this.$chatService.saveConversation({ room: this.room, messages: this.conversation }, "conversation")
    //            .then((response: ng.IHttpPromiseCallbackArg<models.IFile>) => {

    //                var fileData = response.data;

    //                var blob = new Blob([fileData.content], { type: 'text/plain' });

    //                //for IE
    //                if (window.navigator.msSaveOrOpenBlob) {
    //                    window.navigator.msSaveBlob(blob, fileData.fileName);
    //                }

    //                //for Chrome, Safari, Firefox
    //                else {                        
    //                    var url = URL.createObjectURL(blob);
    //                    var a = window.document.createElement('a');
    //                    a.href = url;                       
    //                    a.setAttribute("download", fileData.fileName);
    //                    a.target = '_blank';
    //                    a.click();
    //                }
    //            },
    //            (error: ng.IHttpPromiseCallbackArg<{}>) => {
    //                alert("Sorry an error has occurred. Please try again if the problem persists contact the administrator.");
    //            });
    //    } 
    //}

    //angular.module("proafsolutions").controller("ChatController", ChatController);
}