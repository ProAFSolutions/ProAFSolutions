var proafsolutions;
(function (proafsolutions) {
    var ChatController = (function () {
        function ChatController($scope, ngAudio) {
            this.$scope = $scope;
            this.ngAudio = ngAudio;
            this.init();
        }
        ChatController.prototype.init = function () {
            this.isVisible = false;
            this.welcomeMessage = 'Put something here';
            this.message = '';
            this.conversation = new Array();
            this.roomName = '';
            //this.initHub();
            this.loadSounds();
        };
        ChatController.prototype.initHub = function () {
            var _this = this;
            this.chatRoomHub = $.connection.chatRoomHub;
            this.chatRoomHub.client.getMessage = function (name, message) {
                _this.isVisible = true;
                _this.conversation.push(new proafsolutions.models.ChatMessage(name, message, new Date().toTimeString(), ""));
                _this.sounds[1].play();
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
                this.message = '';
                this.sounds[0].play();
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
        ChatController.prototype.loadSounds = function () {
            this.soundEnabled = true;
            this.sounds = new Array(2);
            this.sounds.push(this.ngAudio.load(proafsolutions.AppSettings.MP3_FILE_SEND));
            this.sounds.push(this.ngAudio.load(proafsolutions.AppSettings.MP3_FILE_RECEIVE));
        };
        ChatController.$inject = ['$scope', 'ngAudio'];
        return ChatController;
    }());
    angular.module("proafsolutions").controller("ChatController", ChatController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=chat.controller.js.map