var proafsolutions;
(function (proafsolutions) {
    var ChatController = (function () {
        function ChatController(Messages, $scope) {
            this.Messages = Messages;
            this.$scope = $scope;
            this.init();
        }
        ChatController.prototype.init = function () {
            this.Messages.send = function () {
            };
            this.Messages.receive = function (message) {
            };
        };
        ChatController.$inject = ['Messages', '$scope'];
        return ChatController;
    }());
    angular.module("proafsolutions").controller("ChatController", ChatController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=chat.controller.js.map