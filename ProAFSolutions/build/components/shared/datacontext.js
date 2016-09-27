var proafsolutions;
(function (proafsolutions) {
    var shared;
    (function (shared) {
        //This service is being used to shared data accross the app
        var DataContext = (function () {
            function DataContext() {
            }
            return DataContext;
        }());
        shared.DataContext = DataContext;
        angular.module("proafsolutions").service("$dataContext", DataContext);
    })(shared = proafsolutions.shared || (proafsolutions.shared = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=datacontext.js.map