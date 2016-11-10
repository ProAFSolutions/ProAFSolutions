namespace proafsolutions.services {

    export interface IPublicService {

        sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}>;

        pingServer(): ng.IHttpPromise<{}>;
<<<<<<< .mine

        saveConversation(conversation: Array<models.IChatMessage>): ng.IPromise<models.IFile>;
=======

        emailConversation(room: string, messages: Array<models.IChatMessage>): ng.IHttpPromise<{}>; 
>>>>>>> .theirs
    }

    export class PublicService implements IPublicService {

        static $inject = ['$http'];      

        private SERVICE_BASE_URL = AppSettings.API_URL + "/public";

        constructor(private $http: ng.IHttpService) {
        }

        public sendMessage(contactMessage: models.IContactMessage): ng.IHttpPromise<{}> {
            return this.$http.post(this.SERVICE_BASE_URL + "/contact-us", contactMessage);                
        }      

        public pingServer(): ng.IHttpPromise<{}> {
            return this.$http.get(this.SERVICE_BASE_URL + "/register-access-stats");
        }



        public emailConversation(room: string, messages: Array<models.IChatMessage>): ng.IHttpPromise<{}> {            
            return this.$http.post(this.SERVICE_BASE_URL + "/email-conversation", { room: room, messages: messages}); 
        }
        public saveConversation(conversation: Array<models.IChatMessage>): ng.IPromise<models.IFile> {
            return this.$http.post(this.SERVICE_BASE_URL + "/save-conversation", {
                headers: {
                    "Content-Type": 'application/json'
                },
                responseType: 'arraybuffer',
                cache: false,
                data: { messages: conversation },
                transformResponse: (fileContent: any) => {
                    return new File(fileContent, name);
                }
            });
        }
<<<<<<< .mine

=======

>>>>>>> .theirs
    }

    angular.module("proafsolutions").service("$publicService", PublicService);
}
