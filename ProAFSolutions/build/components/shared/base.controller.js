var proafsolutions;
(function (proafsolutions) {
    var shared;
    (function (shared) {
        var BaseController = (function () {
            function BaseController($scope, $dataContext) {
                this.$scope = $scope;
                this.$dataContext = $dataContext;
            }
            return BaseController;
        }());
        shared.BaseController = BaseController;
    })(shared = proafsolutions.shared || (proafsolutions.shared = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=base.controller.js.map