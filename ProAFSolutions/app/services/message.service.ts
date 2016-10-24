namespace proafsolutions.services {


    export interface IMessageService {
        sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}>;
    }

    export class MessageService implements IMessageService {

        static $inject = ['$http'];

        constructor(private $http: ng.IHttpService) { }

        public sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}> {
            return this.$http.post("http://localhost:5565/api/messages/contact", contactMessage);
        }       

    }

    angular.module("proafsolutions").service("$messageService", MessageService);
}
