namespace proafsolutions {

    interface IPackagesController {

        packages: Array<PackageVM>;

        selectedPackage(pack: PackageVM): void;

    }

    class PackagesController implements IPackagesController{

        static $inject = ['$scope', '$rootScope', '$translate', '$dataProvider'];

        public packages: Array<PackageVM>;
        public packagesLoaded: boolean;

        constructor(private $scope: ng.IScope,
                    private $rootScope: ng.IRootScopeService,
                    private $translate: ng.translate.ITranslateService,
                    private $dataProvider: services.IDataProviderService) {
            this.init();
        }

        init(): void {
            this.packagesLoaded = false;
            this.packages = new Array<PackageVM>();
            this.loadPackages();
        }

        public loadPackages(): void {           
            this.$dataProvider.getPackagesPromise().then((response: ng.IHttpPromiseCallbackArg<models.IPackage[]>) => {
                _.each(response.data, (pack: models.IPackage, index: number) => {
                    this.packages.push(new PackageVM((index + 1), pack));
                });
                this.packagesLoaded = true;
           });
        }

        public selectedPackage(pack: PackageVM): void {
            this.$rootScope.$broadcast('SelectedPackage!', { subject: pack.title, message: pack.message });
        }

    }

    angular.module("proafsolutions").controller("PackagesController", PackagesController);
}