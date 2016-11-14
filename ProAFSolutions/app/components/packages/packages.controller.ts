namespace proafsolutions {

    interface IPackagesController {
        selectedPackage(packageName: string): void;

    }

    class PackagesController implements IPackagesController{

        static $inject = ['$scope', '$rootScope', '$translate']; 

        constructor(private $scope: ng.IScope, private $rootScope: ng.IRootScopeService,
            private $translate: ng.translate.ITranslateService) {
            this.init();
        }

        init(): void { }

        public selectedPackage(packageName: string): void {
            this.$rootScope.$broadcast('SelectedPackage!', this.$translate.instant(packageName) );
        }

    }

    angular.module("proafsolutions").controller("PackagesController", PackagesController);
}