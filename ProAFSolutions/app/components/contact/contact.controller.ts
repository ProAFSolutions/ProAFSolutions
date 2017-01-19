namespace proafsolutions {

    interface IContactController {
        sendContactMessage(contactForm: any): void;
    }

    class ContactController implements IContactController {

        static $inject = ['$scope', '$dataContext', '$contactService', '$location', '$translate']; 

        public contactMessage: models.IContactMessage;

        public showSuccessMsg: boolean;
        public showFormErrors: boolean;

        constructor(private $scope: ng.IScope,
                    protected $dataContext: shared.IDataContextService,
                    protected $contactService: services.IContactService,
                    protected $location: ng.ILocationService,
                    private $translate: angular.translate.ITranslateProvider) {           
            this.init();
            this.showSuccessMsg = false;
            this.showFormErrors = false;
        }

        init(): void
        {
            this.contactMessage = new models.ContactMessage('','','','','');
            var _self = this;
            this.$scope.$on('SelectedPackage!', (events, args) => {                
                _self.$location.url('##contact');
                _self.contactMessage.subject = args.subject;
                _self.contactMessage.message = args.message;
                _self.contactMessage.offerFileName = args.fileName;
                _self.contactMessage.language = _self.$translate.use();
            });
        }

        public sendContactMessage(contactForm: any): void {    
            let _self = this;
            this.showFormErrors = false;

            if (contactForm.$valid) {
                this.$contactService.sendMessage(this.contactMessage)
                    .then((response: ng.IHttpPromiseCallbackArg<{}>) => {
                        if (response) {
                            this.showSuccessMsg = true;
                            this.contactMessage = new models.ContactMessage('', '', '', '', '')
                            setTimeout(() => {
                                _self.showSuccessMsg = false;
                                _self.$scope.$apply();
                            }, 5000);
                        }
                    });
            } else {
                this.showFormErrors = true;
            }           
        }
      

       /*function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
           
        } */

    }

    angular.module("proafsolutions").controller("ContactController", ContactController);
}