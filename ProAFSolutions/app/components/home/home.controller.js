var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var proafsolutions;
(function (proafsolutions) {
    var HomeController = (function (_super) {
        __extends(HomeController, _super);
        function HomeController($scope, $dataContext, $dataProvider, $translateProvider) {
            _super.call(this, $scope, $dataContext);
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
    }(proafsolutions.shared.BaseController));
    angular.module("proafsolutions").controller("HomeController", HomeController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=home.controller.js.map