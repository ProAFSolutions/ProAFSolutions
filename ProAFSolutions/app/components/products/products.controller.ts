namespace proafsolutions {

    interface IProductsController {


    }

    class ProductsController {

         //this.$dataProvider.getProductsPromise().then((response: ng.IHttpPromiseCallbackArg<models.IProduct[]>) => {
         //       _.each(response.data, (product: models.IProduct) => {
         //           console.info(product.name + " " + product.description);
         //       });
         //   });
    }

    angular.module("proafsolutions").controller("ProductsController", ProductsController);
}