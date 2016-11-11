namespace proafsolutions.services {

    

    export interface IPublicService {
        pingServer(): ng.IHttpPromise<{}>;
    }

    export class PublicService implements IPublicService {

        static $inject = ['$http'];      

        private SERVICE_BASE_URL = AppSettings.API_URL + "/public";

        constructor(private $http: ng.IHttpService) {
        }

       
        public pingServer(): ng.IHttpPromise<{}> {
            return this.$http.get(this.SERVICE_BASE_URL + "/ping");
        }       
    }

    angular.module("proafsolutions").service("$publicService", PublicService);
}
