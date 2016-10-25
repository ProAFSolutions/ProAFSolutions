var proafsolutions;
(function (proafsolutions) {
    var services;
    (function (services) {
        var MessageService = (function () {
            function MessageService($http) {
                this.$http = $http;
            }
            MessageService.prototype.sendMessage = function (contactMessage) {
                //todo: add API url to app setting 
                var apiBaseUrl = "http://localhost:5565";
                return this.$http.post(apiBaseUrl + "/api/messages/contact", contactMessage);
            };
            MessageService.$inject = ['$http'];
            return MessageService;
        }());
        services.MessageService = MessageService;
        angular.module("proafsolutions").service("$messageService", MessageService);
    })(services = proafsolutions.services || (proafsolutions.services = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=message.service.js.map