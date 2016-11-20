namespace proafsolutions.services {   


    export interface IDataProviderService {
        getProductsPromise(): ng.IHttpPromise<models.IProduct[]>; 
        getTeamMembersPromise(): ng.IHttpPromise<models.ITeamMember[]>;
        getPackagesPromise(): ng.IHttpPromise<models.IPackage[]>;
    }


    export class DataProviderService implements IDataProviderService {

        static $inject = ['$http', '$translate'];  

        constructor(private $http: ng.IHttpService,
                    private $translate: angular.translate.ITranslateProvider) { }

        public getProductsPromise(): ng.IHttpPromise<models.IProduct[]> {
            return this.$http.get<models.IProduct[]>(this.getFilePath("products.json"));
        }

        public getTeamMembersPromise(): ng.IHttpPromise<models.ITeamMember[]> {
            return this.$http.get<models.ITeamMember[]>(this.getFilePath("team.json"));
        }

        public getPackagesPromise(): ng.IHttpPromise<models.IPackage[]> {
            return this.$http.get<models.IPackage[]>(this.getFilePath("packages.json"));
        }

        private getFilePath(file: string): string{
            return AppSettings.DATA_FOLDER + '/' + this.$translate.use() + "/" + file;
        }
    }       
    
    angular.module("proafsolutions").service("$dataProvider", DataProviderService);
    
}
