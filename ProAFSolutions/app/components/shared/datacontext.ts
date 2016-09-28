module proafsolutions.shared {

    export interface IDataContextService {
        isBusy: boolean;   
        currentLanguage: string; 
    }

    //This service is being used to shared data accross the app
    export class DataContextService implements IDataContextService {

        public isBusy: boolean;    
        public currentLanguage: string;       
        
        constructor() {    
        }        
    }

    angular.module("proafsolutions").service("$dataContext", DataContextService);
}