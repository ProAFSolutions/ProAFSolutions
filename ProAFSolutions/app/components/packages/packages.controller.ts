namespace proafsolutions {

    interface IPackagesController {
        selectedPackage(packageName: string, defaultMessage: string): void;

    }

    class PackagesController implements IPackagesController{

        static $inject = ['$scope', '$rootScope', '$translate']; 

        constructor(private $scope: ng.IScope, private $rootScope: ng.IRootScopeService,
            private $translate: ng.translate.ITranslateService) {
            this.init();
        }

        init(): void { }

        public selectedPackage(packageName: string, defaultMessage: string): void {
            this.$rootScope.$broadcast('SelectedPackage!', { subject: this.$translate.instant(packageName), message: this.$translate.instant(defaultMessage)});
        }

    }

    angular.module("proafsolutions").controller("PackagesController", PackagesController);
}