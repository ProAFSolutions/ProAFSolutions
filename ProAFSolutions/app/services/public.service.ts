namespace proafsolutions.services {


    export interface IPublicService {
        sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}>;
    }

    export class PublicService implements IPublicService {

        static $inject = ['$http'];      

        private SERVICE_BASE_URL = AppSettings.API_URL + "/public";

        constructor(private $http: ng.IHttpService) { }

        public sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}> {
            return this.$http.post(AppSettings.API_URL + "/contact-us", contactMessage);                
        }       

    }

    angular.module("proafsolutions").service("$publicService", PublicService);
}
