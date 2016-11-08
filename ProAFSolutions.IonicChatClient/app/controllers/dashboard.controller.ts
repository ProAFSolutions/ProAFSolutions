namespace proafsolutions.chat {

    interface ModalScope extends ng.IScope {
        name: string;
        room: string;
        $modalController: ionic.modal.IonicModalController;        
        close: () => void;
        join: () => void;
    }

    interface IDashboardController {     
        initNewRoomModal(): void;
    }

    export class DashboardController implements IDashboardController {

        public $inject = ['$scope', '$location', '$ionicModal', '$cordovaNativeAudio'];

        constructor(private $scope: ModalScope,
                    private $location: angular.ILocationService,
                    private $ionicModal: ionic.modal.IonicModalService,
                    private $cordovaNativeAudio: any) {
           this.init();
        }

        init() {
           this.initSounds();
           this.initNewRoomModal();
        }

        private initSounds(): void {
            if (AppSettings.CURRENT_RUN_MODE == RUN_MODE.MOBILE) {
                this.$cordovaNativeAudio.preloadSimple('welcome', 'sounds/welcome.mp3');
                this.$cordovaNativeAudio.preloadSimple('send', 'sounds/send.mp3');
                this.$cordovaNativeAudio.preloadSimple('receive', 'sounds/receive.mp3');
            }
        }

        public initNewRoomModal(): void {

            var _self = this;

            this.$ionicModal.fromTemplateUrl("templates/popup-new-talk.html", {
                scope: this.$scope,
                animation: 'slide-in-up'
            }).then((modalController: ionic.modal.IonicModalController) => {
                _self.$scope.$modalController = modalController;
            });

            this.$scope.name = AppSettings.ADMIN_CODE;
            this.$scope.room = '';

            this.$scope.join = () => {              
                _self.$location.path('/tab/chats/' + _self.$scope.name + '/' + _self.$scope.room);
                _self.$scope.$modalController.hide();
            };

            this.$scope.close = () => {
                _self.$scope.$modalController.hide();
            };

            // Cleanup the modal when we're done with it!
            this.$scope.$on('$destroy', () => {
                _self.$scope.$modalController.remove();
            });

            // Execute action on hide modal
            this.$scope.$on('modal.hidden', () => {
                // Execute action
            });

            // Execute action on remove modal
            this.$scope.$on('modal.removed', () => {
                // Execute action
            });
        }

       public showModalClick(): void {
            this.$scope.$modalController.show();
       };
        
    }

    angular.module("proafsolutions").controller("DashboardController", DashboardController);

}