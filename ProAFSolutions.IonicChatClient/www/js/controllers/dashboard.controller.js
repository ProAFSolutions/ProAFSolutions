var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var DashboardController = (function () {
            function DashboardController() {
                console.log("Dash Controller");
            }
            return DashboardController;
        }());
        chat.DashboardController = DashboardController;
        angular.module("proafsolutions").controller("DashboardController", DashboardController);
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=dashboard.controller.js.map
