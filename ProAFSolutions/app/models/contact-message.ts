namespace proafsolutions.models {

    export interface IContactMessage {
        name: string;
        email: string;
        subject: string;
        message: string;
        phone: string;
    }

    export class ContactMessage implements IContactMessage {

        constructor(public name: string,
            public email: string,
            public subject: string,
            public message: string,
            public phone: string) {
        }
    }

}