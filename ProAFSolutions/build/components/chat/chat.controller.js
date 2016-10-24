var proafsolutions;
(function (proafsolutions) {
    var ChatController = (function () {
        function ChatController($scope) {
            this.$scope = $scope;
            this.init();
        }
        ChatController.prototype.init = function () {
            this.isVisible = false;
        };
        ChatController.prototype.showClick = function () {
            this.isVisible = true;
        };
        ChatController.prototype.hideClick = function () {
            this.isVisible = false;
        };
        ChatController.$inject = ['$scope'];
        return ChatController;
    }());
    angular.module("proafsolutions").controller("ChatController", ChatController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=chat.controller.js.map