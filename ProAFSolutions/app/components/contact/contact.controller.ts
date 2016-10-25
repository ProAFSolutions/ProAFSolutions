namespace proafsolutions {

    interface IContactController extends shared.IBaseController{
        sendContactMessage(): void;
    }

    class ContactController extends shared.BaseController implements IContactController {

        static $inject = ['$scope', '$dataContext', '$messageService']; 

        public contactMessage: models.IContactMessage;

        constructor($scope: ng.IScope,
            protected $dataContext: shared.IDataContextService,
            protected $messageService: services.IMessageService) {
            super($scope, $dataContext);
            this.init();
        }

        init(): void { }

        public sendContactMessage(): void {
            //todo: callback 
            this.$messageService.sendMessage(this.contactMessage);
        }
    }

    angular.module("proafsolutions").controller("ContactController", ContactController);
}