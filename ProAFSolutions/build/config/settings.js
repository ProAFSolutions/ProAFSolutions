var proafsolutions;
(function (proafsolutions) {
    var AppSettings = (function () {
        function AppSettings() {
        }
        //static APP_MODE = "Release";
        AppSettings.APP_MODE = "Debug";
        AppSettings.COMPONENTS_FOLDER = "app/components";
        AppSettings.DIST_FOLDER = "dist";
        AppSettings.DATA_FOLDER = "data";
        AppSettings.API_URL = "http://localhost:5565/api";
        AppSettings.API_HUBS_URL = "http://localhost:5565/signalr";
        AppSettings.METADATA_KEYWORDS = [
            'ProAFSolutions',
            'Alejandro Clavijo',
            'Filiberto Lopez',
            'Software',
            'Development',
            'Small Businesses',
            'Responsive',
            'Html',
            'Mobile',
            'ASP.NET',
            'JAVA',
            'ECommerce Solutions'
        ];
        return AppSettings;
    }());
    proafsolutions.AppSettings = AppSettings;
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=settings.js.map