namespace proafsolutions {

    interface IPackagesController {

        packages: Array<PackageVM>;

        selectedPackage(pack: PackageVM): void;

        downloadOffer(pack: PackageVM): void;

    }

    class PackagesController implements IPackagesController{

        static $inject = ['$scope', '$rootScope', '$translate', '$dataProvider', '$window'];

        public packages: Array<PackageVM>;
        public packagesLoaded: boolean;

        constructor(private $scope: ng.IScope,
                    private $rootScope: ng.IRootScopeService,
                    private $translate: ng.translate.ITranslateService,
                    private $dataProvider: services.IDataProviderService,
                    private $window: ng.IWindowService) {
            this.init();
        }

        init(): void {
            this.packagesLoaded = false;
            let _self = this;
            this.$scope.$on('LanguageChanged!', (events, args) => {
                setTimeout(() => {
                    _self.loadPackages(); 
                }, 0);             
            });
        }

        public loadPackages(): void {  
            this.packages = new Array<PackageVM>();                   
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

        public downloadOffer(pack: PackageVM): void {
            this.$window.open(pack.orderUrl, '_blank');
        }
    }

    angular.module("proafsolutions").controller("PackagesController", PackagesController);
}