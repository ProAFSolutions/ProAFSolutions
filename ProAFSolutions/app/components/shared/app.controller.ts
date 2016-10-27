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

        public magicShortcut(event: KeyboardEvent): void {
            if (event.ctrlKey && event.altKey && event.shiftKey && event.keyCode == 13) {
                window.open("/admin-chat.html", "AdminChat", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");                          
            }
        }
    }

    angular.module("proafsolutions").controller("AppController", AppController);
}