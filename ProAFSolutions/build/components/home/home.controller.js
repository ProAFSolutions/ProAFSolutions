var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var proafsolutions;
(function (proafsolutions) {
    var HomeController = (function (_super) {
        __extends(HomeController, _super);
        function HomeController($scope, $dataContext) {
            _super.call(this, $scope, $dataContext);
            this.init();
        }
        HomeController.prototype.init = function () { };
        HomeController.$inject = ['$scope', '$dataContext'];
        return HomeController;
    }(proafsolutions.shared.BaseController));
    angular.module("proafsolutions").controller("HomeController", HomeController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=home.controller.js.map