var proafsolutions;
(function (proafsolutions) {
    var ChatController = (function () {
        function ChatController($scope) {
            this.$scope = $scope;
            this.init();
        }
        ChatController.prototype.init = function () {
            this.access = 0;
            this.isVisible = false;
            this.isJoined = false;
            this.welcomeMessage = 'Put something here';
            this.conversation = new Array();
            this.name = '';
            this.roomName = '';
            this.message = '';
            this.soundEnabled = true;
            //this.initHub();             
        };
        ChatController.prototype.initHub = function () {
            var _this = this;
            $.connection.hub.url = 'http://localhost:5565/signalr';
            this.chatRoomHub = $.connection.chatRoomHub;
            this.chatRoomHub.client.getMessage = function (name, message) {
                _this.isVisible = true;
                _this.conversation.push(new proafsolutions.models.ChatMessage(name, message, new Date().toTimeString(), ""));
                _this.playSound("receive");
                _this.$scope.$apply();
            };
        };
        ChatController.prototype.join = function () {
            var _this = this;
            $.connection.hub.start().done(function () {
                _this.chatRoomHub.server.joinRoom(_this.roomName);
                _this.isJoined = true;
            }).fail(function () {
                _this.chatRoomHub = null;
                console.log("Connection failed");
            });
        };
        ChatController.prototype.showWelcomeMessage = function () {
        };
        ChatController.prototype.send = function () {
            if (this.isJoined && this.roomName && this.name) {
                this.chatRoomHub.server.sendMessage(this.name, this.message, this.roomName);
                this.playSound("send");
                this.message = '';
            }
        };
        ChatController.prototype.showClick = function () {
            this.isVisible = true;
            if (this.access == 0)
                this.playSound("welcome");
            this.access++;
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
                var audioFile = null;
                switch (action) {
                    case "welcome":
                        {
                            audioFile = document.getElementById("sound-welcome");
                        }
                        break;
                    case "send":
                        {
                            audioFile = document.getElementById("sound-send");
                        }
                        break;
                    case "receive":
                        {
                            audioFile = document.getElementById("sound-receive");
                        }
                        break;
                }
                audioFile.play();
            }
        };
        ChatController.$inject = ['$scope'];
        return ChatController;
    }());
    angular.module("proafsolutions").controller("ChatController", ChatController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=chat.controller.js.map