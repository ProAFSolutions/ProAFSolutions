var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var DetailsController = (function () {
            function DetailsController(Chats, $stateParams) {
                this.Chats = Chats;
                this.$stateParams = $stateParams;
                this.$inject = ["Chats", "$stateParams"];
                this.chat = Chats.get($stateParams.chatId);
            }
            return DetailsController;
        }());
        chat.DetailsController = DetailsController;
        angular.module("proafsolutions").controller("DetailsController", DetailsController);
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=details.controller.js.map
