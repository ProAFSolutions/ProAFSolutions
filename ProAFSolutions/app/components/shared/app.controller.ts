namespace proafsolutions {

    interface IAppController {
        keywords: string;
        authors: string;
        description: string;      
    }

    class AppController implements IAppController {

        static $inject = ['$dataContext']; 

        public keywords: string;
        public authors: string;
        public description: string;
       

        constructor(private $dataContext: shared.IDataContextService) {          
           this.init();
        }

        init(): void {
            this.setupMetadata();
            this.customizeChatWindow();         
        }       

        private setupMetadata(): void {

            this.authors = "Alejandro Clavijo & Filiberto Lopez";

            this.description = "We develop quality softwares for small businesses";

            _.each(AppSettings.METADATA_KEYWORDS, (keyword: string) => {
                if (keyword) {
                    this.keywords += keyword.toLocaleLowerCase() + ",";
                }               
            });
        }

        public customizeChatWindow(): void{

            setTimeout(() => {

                var $chatIframe = $('#tawkchat-iframe-container').find('#tawkchat-maximized-iframe-element');
                
                var $content = $chatIframe.contents();
                //Removes 'Powered By' 
                $content.find('#tawktoLink').remove();

                //Changing options menu a little
                $content.find('#openMenu').text("Chat Settings").css("text-transform", "Capitalize");

            }, 3000);           
        }

        public openChatWindowClick(): void {
            var $chatIframe = $('#tawkchat-iframe-container').find('#tawkchat-minified-iframe-element-round');       
            $chatIframe.contents().find("#tawkchat-status-icon").click();
        }

         //public magicShortcut(event: KeyboardEvent): void {
        //    if (event.ctrlKey && event.altKey && event.shiftKey && event.keyCode == 13) {
        //        window.open("/admin-chat.html", "AdminChat", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");                          
        //    }
        //}

       
    }

    angular.module("proafsolutions").controller("AppController", AppController);
}