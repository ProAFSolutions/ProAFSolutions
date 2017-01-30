namespace proafsolutions {

    interface IFooterController {

        contactEmail: string;
        copyrightYear: number;
    }

    class FooterController implements IFooterController {

        public get contactEmail(): string {
            return AppSettings.CONTACT_EMAIL;
        }

        public get copyrightYear(): number {
            return new Date().getFullYear();
        }

    }

    angular.module("proafsolutions").controller("FooterController", FooterController);
}