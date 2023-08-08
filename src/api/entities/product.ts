export class Product {
    public title = ''
    public description = ''
    public price = 0
    public amount = 0
    public variations = []
    public colors = []
    public images = []
    public brandId = ''

    constructor(
        product: {
        title: string,
        description: string,
        price: number,
        amount: number,
        variations: [],
        colors: [],
        images: [],
        brand: string}
    ){
        this.title = product.title;
        this.description = product.description;
        this.price = product.price;
        this.amount = product.amount;
        this.variations = product.variations;
        this.colors = product.colors;
        this.images = product.images;
        this.brandId = product.brand;
    }
}