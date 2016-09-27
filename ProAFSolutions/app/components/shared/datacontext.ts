module proafsolutions.shared {

    export interface IDataContext {
        isBusy: boolean;    
    }

    //This service is being used to shared data accross the app
    export class DataContext implements IDataContext {

        public isBusy: boolean;           
        

        constructor() {    
        }
        
    }

    angular.module("proafsolutions").service("$dataContext", DataContext);
}