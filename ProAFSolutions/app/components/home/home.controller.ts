namespace proafsolutions {

    interface IHomeController extends shared.IBaseController {
    }

    class HomeController extends shared.BaseController implements IHomeController {

        static $inject = ['$scope', '$dataContext'];  

        constructor($scope: ng.IScope, $dataContext: shared.IDataContext) {
            super($scope, $dataContext);
            this.init();
        }

        init(): void {}     

      
    }

    angular.module("proafsolutions").controller("HomeController", HomeController);
}