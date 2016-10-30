var proafsolutions;
(function (proafsolutions) {
    var models;
    (function (models) {
        var ChatMessage = (function () {
            function ChatMessage(name, text, datetime, avatarUrl) {
                this.name = name;
                this.text = text;
                this.datetime = datetime;
                this.avatarUrl = avatarUrl;
            }
            return ChatMessage;
        }());
        models.ChatMessage = ChatMessage;
    })(models = proafsolutions.models || (proafsolutions.models = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=chat-message.js.map