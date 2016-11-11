namespace proafsolutions.services {

    
    export interface IChatService {

        saveConversation(conversation: models.IConversation, fileName: string): ng.IHttpPromise<models.IFile>;

        emailConversation(conversation: models.IConversation): ng.IHttpPromise<{}>; 

    }

    export class ChatService implements IChatService {

        static $inject = ['$http'];      

        private SERVICE_BASE_URL = AppSettings.API_URL + "/chat";

        constructor(private $http: ng.IHttpService) {
        }
       
        public emailConversation(conversation: models.IConversation): ng.IHttpPromise<{}> {            
            return this.$http.post(this.SERVICE_BASE_URL + "/email-conversation", conversation); 
        }

        public saveConversation(conversation: models.IConversation, fileName: string): ng.IHttpPromise<models.IFile> {
            return this.$http({
                url: this.SERVICE_BASE_URL + "/save-conversation",
                method: 'POST',
                data: conversation,
                responseType: 'text',
                transformResponse: (fileContent: any) => {
                    return new models.File(fileContent, fileName);
                }
            });
        }
    }

    angular.module("proafsolutions").service("$chatService", ChatService);
}
