var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        (function (RUN_MODE) {
            RUN_MODE[RUN_MODE["MOBILE"] = 1] = "MOBILE";
            RUN_MODE[RUN_MODE["CHROME"] = 2] = "CHROME";
        })(chat.RUN_MODE || (chat.RUN_MODE = {}));
        var RUN_MODE = chat.RUN_MODE;
        var AppSettings = (function () {
            function AppSettings() {
            }
            AppSettings.CURRENT_RUN_MODE = RUN_MODE.CHROME;
            AppSettings.ADMIN_CODE = "ProAF@dmin";
            AppSettings.API_HUBS_URL = "http://localhost:5565/signalr";
            return AppSettings;
        }());
        chat.AppSettings = AppSettings;
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=settings.js.map
