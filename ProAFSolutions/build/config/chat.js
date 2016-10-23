var proafsolutions;
(function (proafsolutions) {
    var ChatConfig = (function () {
        function ChatConfig() {
        }
        return ChatConfig;
    }());
    proafsolutions.ChatConfig = ChatConfig;
    angular.module('cws')
        .constant('config', ChatConfig);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=chat.js.map