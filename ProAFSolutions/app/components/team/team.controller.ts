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

            this.loadTeamMembers();

            this.$scope.$watch(() => this.$dataContext.currentLanguage, (newValue: string, oldValue: string) => {
                if (newValue != oldValue) {
                    let _self = this;
                    setTimeout(() => {
                        _self.loadTeamMembers();
                    }, 500);                    
                }
            });  
        }

        private loadTeamMembers(): void {
            this.$dataProvider.getTeamMembersPromise().then((response: ng.IHttpPromiseCallbackArg<models.ITeamMember[]>) => {
                this.teamMembers = response.data;
            });
        }
    }

    angular.module("proafsolutions").controller("TeamController", TeamController);
}