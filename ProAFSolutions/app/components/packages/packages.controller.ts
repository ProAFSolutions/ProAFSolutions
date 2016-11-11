namespace proafsolutions {

    interface IPackagesController {
        selectedPackage(packageName: string): void;

    }

    class PackagesController implements IPackagesController{

        public selectedPackage(packageName: string): void {
            alert(packageName);
        }

    }

    angular.module("proafsolutions").controller("PackagesController", PackagesController);
}