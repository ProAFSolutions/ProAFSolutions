var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var AppSettings = (function () {
            function AppSettings() {
            }
            //static APP_MODE = "Release";
            AppSettings.APP_MODE = "Debug";
            AppSettings.API_URL = "http://localhost:5565/api";
            AppSettings.API_HUBS_URL = "http://localhost:5565/signalr";
            return AppSettings;
        }());
        chat.AppSettings = AppSettings;
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=settings.js.map
