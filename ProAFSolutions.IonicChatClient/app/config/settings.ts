
namespace proafsolutions.chat {

    export enum RUN_MODE {
        MOBILE = 1,
        CHROME = 2
    }

    export class AppSettings {
       
        static CURRENT_RUN_MODE = RUN_MODE.CHROME;

        static ADMIN_CODE = "ProAF@dmin";
       
        static API_HUBS_URL = "http://localhost:5565/signalr";
        
    }
}

