var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var AccountController = (function () {
            function AccountController() {
                this.settings = {
                    enableFriends: true
                };
            }
            return AccountController;
        }());
        chat.AccountController = AccountController;
        angular.module("proafsolutions").controller("AccountController", AccountController);
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=account.controller.js.map
