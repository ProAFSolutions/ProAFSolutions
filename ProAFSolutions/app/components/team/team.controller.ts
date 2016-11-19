namespace proafsolutions {

    interface ITeamController {

        teamMembers: Array<models.ITeamMember>;

    }

    class TeamController {

        static $inject = ['$scope', '$dataContext', '$dataProvider'];  

        public teamMembers: Array<models.ITeamMember>;

        constructor(private $scope: ng.IScope,   
                    private $dataContext: shared.IDataContextService,         
                    private $dataProvider: services.IDataProviderService) {

            this.init();
        }

        init(): void {
            let _self = this;
            this.$scope.$on('LanguageChanged!', (events, args) => {
                _self.loadTeamMembers();
            });
        }

        private loadTeamMembers(): void {
            this.teamMembers = new Array<models.ITeamMember>();
            this.$dataProvider.getTeamMembersPromise().then((response: ng.IHttpPromiseCallbackArg<models.ITeamMember[]>) => {
                this.teamMembers = response.data;
            });
        }
    }

    angular.module("proafsolutions").controller("TeamController", TeamController);
}