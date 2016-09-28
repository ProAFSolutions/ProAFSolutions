namespace proafsolutions {

    interface IHomeController extends shared.IBaseController {

        changeAppLanguage(lang: string): void;
    }

    class HomeController extends shared.BaseController implements IHomeController {

        static $inject = ['$scope', '$dataContext', '$dataProvider'];  

        constructor($scope: ng.IScope, $dataContext: shared.IDataContextService,
                    private $dataProvider: services.IDataProviderService) {
            super($scope, $dataContext);

            this.init();
        }

        init(): void {
            this.$dataProvider.getProductsPromise().then((response: ng.IHttpPromiseCallbackArg<models.IProduct[]>) => {
                _.each(response.data, (product: models.IProduct) => {
                    console.info(product.name + " " + product.description);
                });
            });
        }     

        public changeAppLanguage(lang: string) {

        }
    }

    angular.module("proafsolutions").controller("HomeController", HomeController);
}