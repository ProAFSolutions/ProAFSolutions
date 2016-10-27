var proafsolutions;
(function (proafsolutions) {
    var ChatController = (function () {
        function ChatController($scope) {
            this.$scope = $scope;
            this.init();
        }
        ChatController.prototype.init = function () {
            this.isVisible = false;
            this.welcomeMessage = 'Put something here';
            this.message = '';
            this.conversation = new Array();
            this.roomName = '';
            this.soundEnabled = true;
            //this.initHub();             
        };
        ChatController.prototype.initHub = function () {
            var _this = this;
            this.chatRoomHub = $.connection.chatRoomHub;
            this.chatRoomHub.client.getMessage = function (name, message) {
                _this.isVisible = true;
                _this.conversation.push(new proafsolutions.models.ChatMessage(name, message, new Date().toTimeString(), ""));
                _this.playSound("receive");
                _this.$scope.$apply();
            };
            $.connection.hub.start().done(function () {
                _this.chatRoomHub.server.joinRoom(_this.roomName);
                console.log("Connected");
            }).fail(function () {
                _this.chatRoomHub = null;
                console.log("Connection failed");
            });
        };
        ChatController.prototype.showWelcomeMessage = function () {
        };
        ChatController.prototype.send = function () {
            if (this.chatRoomHub) {
                this.chatRoomHub.server.sendMessage("", "", "");
                this.playSound("send");
                this.message = '';
            }
        };
        ChatController.prototype.showClick = function () {
            this.isVisible = true;
        };
        ChatController.prototype.hideClick = function () {
            this.isVisible = false;
        };
        ChatController.prototype.enableSound = function () {
            this.soundEnabled = !this.soundEnabled;
        };
        //action: send|receive
        ChatController.prototype.playSound = function (action) {
            if (this.soundEnabled) {
                var audioFile = action == "send" ? document.getElementById("sound-send")
                    : document.getElementById("sound-receive");
                audioFile.play();
            }
        };
        ChatController.$inject = ['$scope'];
        return ChatController;
    }());
    angular.module("proafsolutions").controller("ChatController", ChatController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=chat.controller.js.map