namespace proafsolutions.services {

    

    export interface IContactService {

        sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}>;

    }

    export class ContactService implements IContactService {

        static $inject = ['$http'];      

        private SERVICE_BASE_URL = AppSettings.API_URL + "/contact";

        constructor(private $http: ng.IHttpService) {
        }

        public sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}> {
            return this.$http.post(this.SERVICE_BASE_URL + "/contact-us", contactMessage);                
        }  
      
    }

    angular.module("proafsolutions").service("$contactService", ContactService);
}
