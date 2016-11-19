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

        static $inject = ['$scope', '$rootScope', '$dataContext', '$translate']; 

        public keywords: string;
        public authors: string;
        public description: string;      
 

        constructor(private $scope: ng.IScope,
                    private $rootScope: ng.IRootScopeService,
                    private $dataContext: shared.IDataContextService,
                    private $translate: ng.translate.ITranslateService) {          
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
            let _self = this;
            setTimeout(() => {
                _self.customizeChatWindow();
            }, 2000);

            this.$scope.$watch(() => this.$dataContext.currentLanguage, (newValue: string, oldValue: string) => {
                if (newValue != oldValue) {    
                    this.$rootScope.$broadcast('LanguageChanged!');                                      
                    setTimeout(() => {
                        _self.customizeChatWindow();
                    }, 500);
                }
            });  
        }

        private customizeChatWindow(): void {

            var $chatIframe = $('#tawkchat-iframe-container').find('#tawkchat-maximized-iframe-element');

            var $content = $chatIframe.contents();

            //Removes 'Powered By' 
            $content.find('#tawktoLink').remove();

            //Changing options menu a little
            $content.find('#openMenu').text("Chat Settings").css("text-transform", "Capitalize");   

            this.translateChat($content);         
        }

        private translateChat($content: any) {
            $content.find("#greetingsContainer").text(this.$translate.instant("chat.greeting.text"));
            $content.find("#chatTextarea").attr("placeholder", this.$translate.instant("chat.text.placeholder"));
            $content.find("#openMenu").text(this.$translate.instant("chat.menu.open"));
            $content.find("#closeMenu").html(this.$translate.instant("chat.menu.close"));
            //menu options
            var optionsContainer = $content.find("#optionsContainer");
            optionsContainer.find("#endChatOption").find(".optionTitle").text(this.$translate.instant("chat.menu.option.end"));
            optionsContainer.find("#uploadFileOption").find(".optionTitle").text(this.$translate.instant("chat.menu.option.upload"));
            optionsContainer.find("#soundOption").find(".optionTitle").text(this.$translate.instant("chat.menu.option.sound"));
            optionsContainer.find("#emailTranscriptOption").find(".optionTitle").text(this.$translate.instant("chat.menu.option.email"));
            optionsContainer.find("#printOption").find(".optionTitle").text(this.$translate.instant("chat.menu.option.print"));
            optionsContainer.find("#changeNameOption").find(".optionTitle").text(this.$translate.instant("chat.menu.option.name"));
            //window actions
            $content.find("#minimizeChat").attr("title", this.$translate.instant("chat.actions.minimize"));
            $content.find("#popoutChat").attr("title", this.$translate.instant("chat.actions.popout"));
            $content.find("#endChat").attr("title", this.$translate.instant("chat.actions.endchat"));
            //call off chat
            $content.find("#endChatFormMessageContainer").text(this.$translate.instant("chat.end.message"));
            $content.find("#formCancel").text(this.$translate.instant("chat.end.cancel"));
            $content.find("#formSubmit").text(this.$translate.instant("chat.end.submit"));
        }

        //public magicShortcut(event: KeyboardEvent): void {
        //    if (event.ctrlKey && event.altKey && event.shiftKey && event.keyCode == 13) {
        //        window.open("/admin-chat.html", "AdminChat", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");                          
        //    }
        //}
    }     

    angular.module("proafsolutions").controller("AppController", AppController);
}