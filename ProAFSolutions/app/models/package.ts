namespace proafsolutions.models {

    export interface IPackageOption {
        name: string;      
        price: number;
        included: boolean;
    }

    export interface IPackage {       
        basePrice: number;
        title: string;
        message: string;
        options: Array<IPackageOption>;
    }

}