var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var ChatMessage = (function () {
            function ChatMessage(name, text, datetime, avatarUrl) {
                this.name = name;
                this.text = text;
                this.datetime = datetime;
                this.avatarUrl = avatarUrl;
            }
            return ChatMessage;
        }());
        var ChatController = (function () {
            function ChatController($scope, $stateParams, $cordovaNativeAudio) {
                this.$scope = $scope;
                this.$stateParams = $stateParams;
                this.$cordovaNativeAudio = $cordovaNativeAudio;
                this.$inject = ['$scope', '$stateParams', '$cordovaNativeAudio'];
                this.init();
            }
            ChatController.prototype.init = function () {
                this.name = this.$stateParams.name;
                this.roomName = this.$stateParams.room;
                this.message = '';
                this.conversation = new Array();
                this.initHub();
            };
            ChatController.prototype.initHub = function () {
                var _this = this;
                try {
                    $.connection.hub.url = chat.AppSettings.API_HUBS_URL;
                    this.chatRoomHub = $.connection.chatRoomHub;
                    this.chatRoomHub.client.getMessage = function (name, message) {
                        _this.conversation.push(new ChatMessage(name, message, new Date().toTimeString(), ""));
                        _this.$scope.$apply();
                        _this.playSound('receive');
                    };
                }
                catch (ex) {
                    console.error("Coudn't reach the server , check if the server is running");
                }
            };
            ChatController.prototype.join = function () {
                var _this = this;
                $.connection.hub.start().done(function () {
                    _this.chatRoomHub.server.joinRoomFromAdminApp(_this.roomName);
                    _this.isJoined = true;
                    _this.playSound('welcome');
                }).fail(function () {
                    _this.chatRoomHub = null;
                });
            };
            ChatController.prototype.send = function () {
                if (this.isJoined && this.roomName) {
                    this.chatRoomHub.server.sendMessage(this.name, this.message, this.roomName);
                    this.playSound('send');
                    this.message = '';
                }
            };
            ChatController.prototype.playSound = function (audio) {
                if (chat.AppSettings.CURRENT_RUN_MODE == chat.RUN_MODE.MOBILE) {
                    this.$cordovaNativeAudio.play(audio);
                }
            };
            return ChatController;
        }());
        chat.ChatController = ChatController;
        angular.module("proafsolutions").controller("ChatController", ChatController);
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=chat.controller.js.map
