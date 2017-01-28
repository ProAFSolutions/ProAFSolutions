
namespace proafsolutions {

    export class AppSettings {

        static APP_MODE = "Release";
        //static APP_MODE = "Debug";
               
        static DIST_FOLDER = "www";
        static DATA_FOLDER = "data";

        static OFFERS_FOLDER = "offers";
        static ORDER_ECOMMERCE = "ProAFSolutionsECommerce.pdf";
        static ORDER_MOBILE = "ProAFSolutionsMobile.pdf";
        static ORDER_SUITE = "ProAFSolutionsSuite.pdf";
        static ORDER_WEB = "ProAFSolutionsWeb.pdf";


        static API_URL = "http://proafsolutions.com/api";
        static API_HUBS_URL = "http://localhost:5565/signalr";
        static API_URL_TEMPLATES = "http://proafsolutions.com/api/Templates/Offers";

        //static API_URL = "http://localhost:5565";
       // static API_HUBS_URL = "http://localhost:5565/signalr";
       // static API_URL_TEMPLATES = "http://localhost:5565/Templates/Offers";

        static CONTACT_EMAIL = "contact@proafsolutions.com";

       static METADATA_KEYWORDS = [
            'ProAFSolutions',
            'Alejandro Clavijo',
            'Filiberto Lopez',
            'Software',
            'Development',
            'Small Businesses',            
            'Responsive',
            'Html',
            'Mobile',
            'ASP.NET',
            'JAVA',            
            'ECommerce Solutions'
        ]


       static get COMPONENTS_FOLDER(): string {
           return this.APP_MODE == "Release" ? "www" : "app/components";
       }     

       public static getTemplatePath(componentName: string): string {
           return AppSettings.APP_MODE == 'Debug' ? AppSettings.COMPONENTS_FOLDER + '/' + componentName + '/' + componentName + '.html'
                                                  : AppSettings.DIST_FOLDER + '/' + componentName + '.min.html';
       }

       public static getDirectiveTemplatePath(subfolder: string, directiveName): string {
           return AppSettings.APP_MODE == 'Debug' ? AppSettings.COMPONENTS_FOLDER + '/' + subfolder + '/' + directiveName + '.html'
                                                  : AppSettings.DIST_FOLDER + '/' + directiveName + '.min.html';
       }
    } 
}

    