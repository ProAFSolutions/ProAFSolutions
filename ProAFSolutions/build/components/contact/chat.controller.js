var proafsolutions;
(function (proafsolutions) {
    var ChatController = (function () {
        function ChatController($scope) {
            this.$scope = $scope;
            this.name = 'Guest';
            this.message = '';
            this.messagesQueue = [];
            this.initHub();
        }
        ChatController.prototype.initHub = function () {
            var _this = this;
            this.chatHub = $.connection.chatHub;
            $.connection.hub.start();
            this.chatHub.client.broadcastMessage = function (name, message) {
                var newMessage = name + ' says: ' + message;
                _this.messagesQueue.push(newMessage);
                _this.$scope.$apply();
            };
        };
        ChatController.prototype.newMessage = function () {
            this.chatHub.server.sendMessage(this.name, this.message);
            this.message = '';
        };
        return ChatController;
    }());
    angular.module("proafsolutions").controller("ChatController", ChatController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=chat.controller.js.map