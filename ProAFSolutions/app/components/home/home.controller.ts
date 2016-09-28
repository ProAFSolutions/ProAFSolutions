namespace proafsolutions {

    interface IHomeController extends shared.IBaseController {

        changeAppLanguageClick(lang: string): void;
    }

    class HomeController extends shared.BaseController implements IHomeController {

        static $inject = ['$scope', '$dataContext', '$dataProvider', '$translate'];  

        public currentLang: string;


        constructor($scope: ng.IScope, $dataContext: shared.IDataContextService,
                    private $dataProvider: services.IDataProviderService,
                    private $translateProvider: angular.translate.ITranslateProvider) {
            super($scope, $dataContext);
            this.init();
        }

        init(): void {
            this.$dataContext.currentLanguage = this.$translateProvider.use();
            this.$dataProvider.getProductsPromise().then((response: ng.IHttpPromiseCallbackArg<models.IProduct[]>) => {
                _.each(response.data, (product: models.IProduct) => {
                    console.info(product.name + " " + product.description);
                });
            });
        } 

        public changeAppLanguageClick(lang: string) {
            this.$translateProvider.use(lang);
            this.$dataContext.currentLanguage = lang;
        }
    }

    angular.module("proafsolutions").controller("HomeController", HomeController);
}