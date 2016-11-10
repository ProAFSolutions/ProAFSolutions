namespace proafsolutions.services {


    export interface IPublicService {

        sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}>;

        pingServer(): ng.IHttpPromise<{}>;

        emailConversation(room: string, messages: Array<models.IChatMessage>): ng.IHttpPromise<{}>; 
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

        public emailConversation(room: string, messages: Array<models.IChatMessage>): ng.IHttpPromise<{}> {            
            return this.$http.post(this.SERVICE_BASE_URL + "/email-conversation", { room: room, messages: messages}); 
        }
    }

    angular.module("proafsolutions").service("$publicService", PublicService);
}
