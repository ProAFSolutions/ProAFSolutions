namespace proafsolutions.services {


    export interface IMessageService {
        sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}>;
    }

    export class MessageService implements IMessageService {

        static $inject = ['$http'];      

        private SERVICE_BASE_URL = AppSettings.API_URL + "/messages";

        constructor(private $http: ng.IHttpService) { }

        public sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}> {
            return this.$http.post(this.SERVICE_BASE_URL + "/contact", contactMessage);                
        }       

    }

    angular.module("proafsolutions").service("$messageService", MessageService);
}
