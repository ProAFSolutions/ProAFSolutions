var proafsolutions;
(function (proafsolutions) {
    var services;
    (function (services) {
        var DataProviderService = (function () {
            function DataProviderService($http) {
                this.$http = $http;
            }
            DataProviderService.prototype.getProductsPromise = function () {
                return this.$http.get("/data/products.json");
            };
            return DataProviderService;
        }());
        services.DataProviderService = DataProviderService;
        angular.module("proafsolutions").service("$dataProvider", DataProviderService);
    })(services = proafsolutions.services || (proafsolutions.services = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=dataprovider.service.js.map