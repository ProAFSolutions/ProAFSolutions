namespace proafsolutions {

    interface IAppController {
        keywords: string;
        authors: string;
        description: string;      

        //Actions
        catchHttpErrors(): void;
        setupMetadata(): void;
        setupChatWindow(): void;   
    }

    class AppController implements IAppController {

        static $inject = ['$scope', '$dataContext']; 

        public keywords: string;
        public authors: string;
        public description: string;      
 

        constructor(private $scope: ng.IScope,
                    private $dataContext: shared.IDataContextService) {          
           this.init();
        }

        init(): void {
            this.catchHttpErrors();
            this.setupMetadata();
            this.setupChatWindow();           
        }       

        public catchHttpErrors(): void {
            let _self = this;
            this.$scope.$on('HttpError!', (events: any, args: any) => {
                console.error(args.message);
            });
        }

        public setupMetadata(): void {

            this.authors = "Alejandro Clavijo & Filiberto Lopez";

            this.description = "We develop quality softwares for small businesses";

            _.each(AppSettings.METADATA_KEYWORDS, (keyword: string) => {
                if (keyword) {
                    this.keywords += keyword.toLocaleLowerCase() + ",";
                }               
            });
        }

        public setupChatWindow(): void {
            this.$scope.$watch(() => this.$dataContext.currentLanguage, (newValue: string, oldValue: string) => {
                if (newValue != oldValue) {
                    let _self = this;
                    setTimeout(() => {
                        _self.customizeChatWindow(newValue);
                    }, 500);
                }
            });  
        }

        private customizeChatWindow(language: string): void {      

            var $chatIframe = $('#tawkchat-iframe-container').find('#tawkchat-maximized-iframe-element');
                
            var $content = $chatIframe.contents();

            //Removes 'Powered By' 
            $content.find('#tawktoLink').remove();

            //Changing options menu a little
            $content.find('#openMenu').text("Chat Settings").css("text-transform", "Capitalize");

            //Options container
            var optionsContainer = $content.find("#optionsContainer");               

            if (language == 'en-US') {
                $content.find("#greetingsContainer").text("We are live and ready to chat with you now. Say something to start a live chat.");
                $content.find("#chatTextarea").attr("placeholder", "Type here and press enter..");                    
                $content.find("#openMenu").text("Chat Settings");
                $content.find("#closeMenu").html("Close menu <span></span>");
                //menu options
                optionsContainer.find("#endChatOption").find(".optionTitle").text("End chat");
                optionsContainer.find("#uploadFileOption").find(".optionTitle").text("Upload File");
                optionsContainer.find("#soundOption").find(".optionTitle").text("Sound On");
                optionsContainer.find("#emailTranscriptOption").find(".optionTitle").text("Email Transcript");
                optionsContainer.find("#printOption").find(".optionTitle").text("Print Transcript");
                optionsContainer.find("#changeNameOption").find(".optionTitle").text("Change Name");
                //controls titles
                $content.find("#minimizeChat").attr("title", "Minimize");
                $content.find("#popoutChat").attr("title", "Pop out");
                $content.find("#endChat").attr("title", "End Chat");
                //end chat actions
                $content.find("#endChatFormMessageContainer").text("Are you sure you want to end this chat?");
                $content.find("#formCancel").text("Cancel");
                $content.find("#formSubmit").text("End Chat");                 
            }
            else if (language == 'es-ES') {
                $content.find("#greetingsContainer").text("Estamos listos para chatear con usted. Teclee debajo para iniciar una conversación.");
                $content.find("#chatTextarea").attr("placeholder", "Teclee aqui y presione enter..");                    
                $content.find("#openMenu").text("Opciones");  
                $content.find("#closeMenu").html("Cerrar menú <span></span>");
                // menu options
                optionsContainer.find("#endChatOption").find(".optionTitle").text("Terminar Conversación");
                optionsContainer.find("#uploadFileOption").find(".optionTitle").text("Subir Fichero");
                optionsContainer.find("#soundOption").find(".optionTitle").text("Activar Sonido");
                optionsContainer.find("#emailTranscriptOption").find(".optionTitle").text("Enviar por Correo");
                optionsContainer.find("#printOption").find(".optionTitle").text("Imprimir Conversación");
                optionsContainer.find("#changeNameOption").find(".optionTitle").text("Cambiar Nombre");
                //controls titles
                $content.find("#minimizeChat").attr("title", "Minimizar");
                $content.find("#popoutChat").attr("title", "Separar");
                $content.find("#endChat").attr("title", "Cerrar Chat");            
                // end chat actions
                $content.find("#endChatFormMessageContainer").text("Está seguro que desea terminar esta conversación?");   
                $content.find("#formCancel").text("Cancelar");
                $content.find("#formSubmit").text("Finalizar Chat");                                   
            }                      
        }      

        //public magicShortcut(event: KeyboardEvent): void {
        //    if (event.ctrlKey && event.altKey && event.shiftKey && event.keyCode == 13) {
        //        window.open("/admin-chat.html", "AdminChat", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");                          
        //    }
        //}

       
    }

    angular.module("proafsolutions").controller("AppController", AppController);
}