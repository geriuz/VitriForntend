export class Product {
    constructor(
        public id:number,
        public sku:string,
        public name:string,
        public description:string,
        public urlImage:string,
        public image:File,
        public urlDataSheet:string,
        public dataSheet:File,
        public price:number,
        public stock:number,
        public userId:string,
        public categoryId:string
        ){
        }
}
