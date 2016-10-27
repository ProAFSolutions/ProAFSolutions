var proafsolutions;
(function (proafsolutions) {
    var HomeController = (function () {
        function HomeController($scope, $dataContext, $dataProvider, $translateProvider) {
            this.$scope = $scope;
            this.$dataContext = $dataContext;
            this.$dataProvider = $dataProvider;
            this.$translateProvider = $translateProvider;
            this.init();
        }
        HomeController.prototype.init = function () {
            this.$dataContext.currentLanguage = this.$translateProvider.use();
            this.$dataProvider.getProductsPromise().then(function (response) {
                _.each(response.data, function (product) {
                    console.info(product.name + " " + product.description);
                });
            });
        };
        HomeController.prototype.changeAppLanguageClick = function (lang) {
            this.$translateProvider.use(lang);
            this.$dataContext.currentLanguage = lang;
        };
        HomeController.$inject = ['$scope', '$dataContext', '$dataProvider', '$translate'];
        return HomeController;
    }());
    angular.module("proafsolutions").controller("HomeController", HomeController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=home.controller.js.map