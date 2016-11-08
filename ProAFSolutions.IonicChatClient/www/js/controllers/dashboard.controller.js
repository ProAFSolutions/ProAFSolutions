var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var DashboardController = (function () {
            function DashboardController($scope, $location, $ionicModal, $cordovaNativeAudio) {
                this.$scope = $scope;
                this.$location = $location;
                this.$ionicModal = $ionicModal;
                this.$cordovaNativeAudio = $cordovaNativeAudio;
                this.$inject = ['$scope', '$location', '$ionicModal', '$cordovaNativeAudio'];
                this.init();
            }
            DashboardController.prototype.init = function () {
                this.initSounds();
                this.initNewRoomModal();
            };
            DashboardController.prototype.initSounds = function () {
                if (chat.AppSettings.CURRENT_RUN_MODE == chat.RUN_MODE.MOBILE) {
                    this.$cordovaNativeAudio.preloadSimple('welcome', 'sounds/welcome.mp3');
                    this.$cordovaNativeAudio.preloadSimple('send', 'sounds/send.mp3');
                    this.$cordovaNativeAudio.preloadSimple('receive', 'sounds/receive.mp3');
                }
            };
            DashboardController.prototype.initNewRoomModal = function () {
                var _self = this;
                this.$ionicModal.fromTemplateUrl("templates/popup-new-talk.html", {
                    scope: this.$scope,
                    animation: 'slide-in-up'
                }).then(function (modalController) {
                    _self.$scope.$modalController = modalController;
                });
                this.$scope.name = chat.AppSettings.ADMIN_CODE;
                this.$scope.room = '';
                this.$scope.join = function () {
                    _self.$location.path('/tab/chats/' + _self.$scope.name + '/' + _self.$scope.room);
                    _self.$scope.$modalController.hide();
                };
                this.$scope.close = function () {
                    _self.$scope.$modalController.hide();
                };
                // Cleanup the modal when we're done with it!
                this.$scope.$on('$destroy', function () {
                    _self.$scope.$modalController.remove();
                });
                // Execute action on hide modal
                this.$scope.$on('modal.hidden', function () {
                    // Execute action
                });
                // Execute action on remove modal
                this.$scope.$on('modal.removed', function () {
                    // Execute action
                });
            };
            DashboardController.prototype.showModalClick = function () {
                this.$scope.$modalController.show();
            };
            ;
            return DashboardController;
        }());
        chat.DashboardController = DashboardController;
        angular.module("proafsolutions").controller("DashboardController", DashboardController);
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=dashboard.controller.js.map
