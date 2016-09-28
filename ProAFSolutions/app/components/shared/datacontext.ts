module proafsolutions.shared {

    export interface IDataContextService {
        isBusy: boolean;    
    }

    //This service is being used to shared data accross the app
    export class DataContextService implements IDataContextService {

        public isBusy: boolean;          
        
        constructor() {    
        }        
    }

    angular.module("proafsolutions").service("$dataContext", DataContextService);
}