var proafsolutions;
(function (proafsolutions) {
    var services;
    (function (services) {
        var MessageService = (function () {
            function MessageService($http) {
                this.$http = $http;
                this.SERVICE_BASE_URL = proafsolutions.AppSettings.API_URL + "/messages";
            }
            MessageService.prototype.sendMessage = function (contactMessage) {
                return this.$http.post(this.SERVICE_BASE_URL + "/contact-us", contactMessage);
            };
            MessageService.$inject = ['$http'];
            return MessageService;
        }());
        services.MessageService = MessageService;
        angular.module("proafsolutions").service("$messageService", MessageService);
    })(services = proafsolutions.services || (proafsolutions.services = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=message.service.js.map