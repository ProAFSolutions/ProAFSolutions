namespace proafsolutions.services {


    export interface IPublicService {

        sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}>;

        pingServer(): ng.IHttpPromise<{}>;
    }

    export class PublicService implements IPublicService {

        static $inject = ['$http'];      

        private SERVICE_BASE_URL = AppSettings.API_URL + "/public";

        constructor(private $http: ng.IHttpService) { }

        public sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}> {
            return this.$http.post(this.SERVICE_BASE_URL + "/contact-us", contactMessage);                
        }      

        public pingServer(): ng.IHttpPromise<{}> {
            return this.$http.get(this.SERVICE_BASE_URL + "/register-access-stats");
        }

    }

    angular.module("proafsolutions").service("$publicService", PublicService);
}
