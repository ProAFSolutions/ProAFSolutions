namespace proafsolutions {

    interface IPackageToggleScope extends ng.IScope {
        toggleId: string;       
        toggleOption: PackageOptionVM;
        togglePackage: PackageVM;
    }

    class PackageToggleDirective implements ng.IDirective {

        static instance(): ng.IDirective {
            return new PackageToggleDirective;
        }

        public restrict = 'E';       
        public templateUrl = '/app/components/packages/package-toggle.directive.html';
        public scope = {                
            toggleId: '@',
            toggleColor: '@',  
            togglePackage: '=',         
            toggleOption: '='             
        };

        public link(scope: IPackageToggleScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {}
    }
   
    angular.module("proafsolutions").directive('packageToggle', PackageToggleDirective.instance);
  
}