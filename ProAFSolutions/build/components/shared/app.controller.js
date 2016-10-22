var proafsolutions;
(function (proafsolutions) {
    var AppController = (function () {
        function AppController($dataContext) {
            this.$dataContext = $dataContext;
            this.init();
        }
        AppController.prototype.init = function () {
            this.setupMetadata();
        };
        AppController.prototype.setupMetadata = function () {
            var _this = this;
            this.authors = "Alejandro Clavijo & Filiberto Lopez";
            this.description = "We develop quality softwares for small businesses";
            _.each(proafsolutions.AppSettings.METADATA_KEYWORDS, function (keyword) {
                if (keyword) {
                    _this.keywords += keyword.toLocaleLowerCase() + ",";
                }
            });
        };
        AppController.$inject = ['$dataContext'];
        return AppController;
    }());
    angular.module("proafsolutions").controller("AppController", AppController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=app.controller.js.map