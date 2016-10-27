var proafsolutions;
(function (proafsolutions) {
    var AppLanguageConfig = (function () {
        function AppLanguageConfig() {
        }
        AppLanguageConfig.setupLanguage = function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: '/assets/i18n/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('es-ES');
            $translateProvider.useLocalStorage();
        };
        return AppLanguageConfig;
    }());
    proafsolutions.AppLanguageConfig = AppLanguageConfig;
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=language.js.map