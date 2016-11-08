var proafsolutions;
(function (proafsolutions) {
    var ContactController = (function () {
        function ContactController($scope, $dataContext, $publicService) {
            this.$scope = $scope;
            this.$dataContext = $dataContext;
            this.$publicService = $publicService;
            this.init();
        }
        ContactController.prototype.init = function () { };
        ContactController.prototype.sendContactMessage = function () {
            //todo: callback 
            this.$publicService.sendMessage(this.contactMessage);
        };
        ContactController.$inject = ['$scope', '$dataContext', '$publicService'];
        return ContactController;
    }());
    angular.module("proafsolutions").controller("ContactController", ContactController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=contact.controller.js.map