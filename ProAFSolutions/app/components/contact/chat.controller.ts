namespace proafsolutions {

    interface IChatController {

        name: string;
        message: string;
        messagesQueue: Array<string>;
        chatHub: ChatHubProxy;

        newMessage(): void;
    }

    class ChatController implements IChatController {

        public name: string;
        public message: string;
        public messagesQueue: Array<string>;
        public chatHub: ChatHubProxy;

        constructor(private $scope: ng.IScope) {
            this.name = 'Guest';
            this.message = ''; 
            this.messagesQueue = [];
            this.initHub();
        }

        public initHub(): void {
            this.chatHub = $.connection.chatHub;
            $.connection.hub.start();

            this.chatHub.client.broadcastMessage =  (name, message) => {
                var newMessage = name + ' says: ' + message;               
                this.messagesQueue.push(newMessage);
                this.$scope.$apply();
            };
        }

        public newMessage(): void {           
            this.chatHub.server.sendMessage(this.name, this.message);
            this.message = '';
        }
    }

    angular.module("proafsolutions").controller("ChatController", ChatController);
}