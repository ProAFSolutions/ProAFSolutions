var proafsolutions;
(function (proafsolutions) {
    var shared;
    (function (shared) {
        //This service is being used to shared data accross the app
        var DataContextService = (function () {
            function DataContextService() {
            }
            return DataContextService;
        }());
        shared.DataContextService = DataContextService;
        angular.module("proafsolutions").service("$dataContext", DataContextService);
    })(shared = proafsolutions.shared || (proafsolutions.shared = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=datacontext.js.map