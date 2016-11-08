var proafsolutions;
(function (proafsolutions) {
    var services;
    (function (services) {
        var PublicService = (function () {
            function PublicService($http) {
                this.$http = $http;
                this.SERVICE_BASE_URL = proafsolutions.AppSettings.API_URL + "/public";
            }
            PublicService.prototype.sendMessage = function (contactMessage) {
                return this.$http.post(proafsolutions.AppSettings.API_URL + "/contact-us", contactMessage);
            };
            PublicService.$inject = ['$http'];
            return PublicService;
        }());
        services.PublicService = PublicService;
        angular.module("proafsolutions").service("$publicService", PublicService);
    })(services = proafsolutions.services || (proafsolutions.services = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=public.service.js.map