namespace proafsolutions.services {   


    export interface IDataProviderService {
        getProductsPromise(): ng.IHttpPromise<models.IProduct[]>; 
    }


    export class DataProviderService implements IDataProviderService {
        
        constructor(private $http: ng.IHttpService) { }

        public getProductsPromise(): ng.IHttpPromise<models.IProduct[]> {
            return this.$http.get<models.IProduct[]>("/data/products.json");
        }

    }       

    angular.module("proafsolutions").service("$dataProvider", DataProviderService);
    
}
