namespace proafsolutions {

    export class PackageOptionVM {
        public model: models.IPackageOption;
        public isChecked: boolean;

        constructor(option: models.IPackageOption) {
            this.model = option;
            this.isChecked = option.included;
        } 

        public getPrice(): number {
            return this.isChecked ? this.model.price : 0;
        }        
    }

    export class PackageVM  {
        public id: number;
        public basePrice: number;
        public title: string;
        public message: string;
        public orderFileName: string;
        public options: Array<PackageOptionVM>;
        public totalPrice: number;

        constructor(id: number, pack: models.IPackage) {
            this.id = id;
            this.basePrice = pack.basePrice;
            this.title = pack.title;
            this.message = pack.message;
            this.orderFileName = pack.orderFileName;        
            this.totalPrice = 0;            

            let sortedOptions = _.sortBy(pack.options, (option: models.IPackageOption) => {
                return option.order;
            });
            this.options = new Array<PackageOptionVM>();
            _.each(sortedOptions, (option: models.IPackageOption) => {
                this.options.push(new PackageOptionVM(option));
            });
        }   

        public calculateTotalPrice(): void {           
            this.totalPrice = 0;
            var selection = 0;
            _.each(this.options, (option: PackageOptionVM) => {
                if (!option.model.included)                
                    selection += option.getPrice();
            });
            this.totalPrice = this.basePrice + selection;
        }

        public getCheckedOptions(): Array<string> {
            var result = new Array<string>();
            _.each(this.options, (option: PackageOptionVM) => {
                if (option.isChecked && !option.model.included)
                    result.push(option.model.name);
            });
            return result;
        }

    }

}