namespace proafsolutions.chat {

    interface IDetailsController {

    }

    export class DetailsController implements IDetailsController {
        public $inject = ["Chats", "$stateParams"];
        chat: any;
        constructor(public Chats: services.IChatsService, public $stateParams: any) {
            this.chat = Chats.get($stateParams.chatId);
        }
    }
    
    angular.module("proafsolutions").controller("DetailsController", DetailsController);

}