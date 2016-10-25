namespace proafsolutions.services {


    export interface IMessageService {
        sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}>;
    }

    export class MessageService implements IMessageService {

        static $inject = ['$http'];      

        constructor(private $http: ng.IHttpService) { }

        public sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}> {

            //todo: add API url to app setting 
            var apiBaseUrl = "http://localhost:5565";

            return this.$http.post(apiBaseUrl + "/api/messages/contact", contactMessage);                
        }       

    }

    angular.module("proafsolutions").service("$messageService", MessageService);
}
