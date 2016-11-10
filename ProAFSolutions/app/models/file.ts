namespace proafsolutions.models {

    export interface IFile {
        content: string | ArrayBuffer;
        fileName: string;
    }

    export class File implements IFile {
        constructor(public content?: string,
                    public fileName?: string) {
        }
    }

}