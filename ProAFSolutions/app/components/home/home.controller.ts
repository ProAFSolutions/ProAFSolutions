namespace proafsolutions {

    interface IHomeController {

        changeAppLanguageClick(lang: string): void;
    }

    class HomeController implements IHomeController {

        static $inject = ['$scope', '$dataContext', '$dataProvider', '$translate'];  

        public currentLang: string;


        constructor(private $scope: ng.IScope,
                    private $dataContext: shared.IDataContextService,
                    private $dataProvider: services.IDataProviderService,
                    private $translateProvider: angular.translate.ITranslateProvider) {           
            this.init();
        }

        init(): void {
            this.$dataContext.currentLanguage = this.$translateProvider.use();          
        } 

        public closeMenuClick(): void {
            $(".navbar-toggle").click();
        }

        public changeAppLanguageClick(lang: string) {
            this.$translateProvider.use(lang);
            this.$dataContext.currentLanguage = lang;
        }
    }

    angular.module("proafsolutions").controller("HomeController", HomeController);
}