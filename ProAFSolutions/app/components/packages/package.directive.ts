namespace proafsolutions {

    class PackageWidgetDirective implements ng.IDirective {

        static instance(): ng.IDirective {
            return new PackageWidgetDirective;
        }

        public restrict = 'E';
        public templateUrl = '/app/components/packages/package.directive.html';
        public scope = {
            vm: '=ctrl',
            package: '=',           
            color: '@',
            icon: '@',
            hideTextHeader: '@'
        };
        public link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {

        }
    }

    angular.module("proafsolutions").directive('packageWidget', PackageWidgetDirective.instance);
}