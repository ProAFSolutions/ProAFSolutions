var proafsolutions;
(function (proafsolutions) {
    var MetadataConfig = (function () {
        function MetadataConfig() {
        }
        MetadataConfig.setupSiteMetadata = function ($rootScope) {
            $rootScope.authors = "Alejandro Clavijo & Filiberto Lopez";
            $rootScope.description = "We develop quality softwares for small businesses";
            _.each(proafsolutions.AppSettings.METADATA_KEYWORDS, function (keyword) {
                $rootScope.keywords += keyword.toLocaleLowerCase() + ",";
            });
        };
        return MetadataConfig;
    }());
    proafsolutions.MetadataConfig = MetadataConfig;
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=metadata.js.map