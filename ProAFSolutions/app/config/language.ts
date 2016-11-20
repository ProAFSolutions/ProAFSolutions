
namespace proafsolutions {      

   export class AppLanguageConfig {       

       public static setupLanguage($translateProvider: angular.translate.ITranslateProvider): void {
   
           $translateProvider.useStaticFilesLoader({
               prefix: '/assets/i18n/',
               suffix: '.json'
           });

           $translateProvider.useLocalStorage(); 

           $translateProvider.preferredLanguage('es-ES');

                   
       }     
   }
}