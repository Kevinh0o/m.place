import { DataBase } from "../services/data-base";
import { Payment } from "../services/payment";

type Product = {
    id: number,
    amount: number
}

type OrderItem = {
    id: number,
    title: string,
    quantity: number,
    unit_price: number,
    discount: number
}
export class Order {
    private db: DataBase;
    private productIdList: number[];
    private requestProducts: Product[];

    constructor(requestProducts: Product[], public orderId?: string){
        //starts DataBase
        this.db = new DataBase();

        //verify products
        const verifiedRequestProducts = requestProducts.map((item)=>{
            if(!item.id || !item.amount){
                throw new Error('Itens inválidos.');
            }
            
            return item.id
        })

        this.productIdList = verifiedRequestProducts;
        this.requestProducts = requestProducts;
    }

    public async createOrder(userId: string){
        try{
            const products = await this.verifyProducts(this.productIdList, this.requestProducts);

            const dbProductsId = await this.db.createOrder(userId, products);

            const paymentResponse = await Promise.all([dbProductsId])
                .then(async()=>{
                    const order = await Payment.createOrder(products, dbProductsId);
                    return order;
                })
        
            return paymentResponse;
        }
        catch{
            throw new Error('Erro ao criar pedido.');
        }

    }

    public async updateOrder(){
    }

    public async getOrders(page: number, take: number){
        try{
            const dbProducts = await this.db.getOrders(page, take);

            return dbProducts;
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }

    public async getOrdersByUserId(userId: string, page: number, take: number){
        try{
            const dbProducts = await this.db.getOrdersByUserId(userId, page, take);

            return dbProducts;
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }

    public async getOrderById(orderId: number){

        try{
            const dbProduct = await this.db.getOrderById(orderId);

            return dbProduct;
        }
        catch(err: any){
            throw new Error(err.message);
        }
    }

    //Find the products inside a productList in DataBase and return an array with the info,
    //check if products exists and if amount is enough to complete the purshase
    private async verifyProducts(productIdList: number[], requestProducts: Product[]): Promise<OrderItem[]>{

        try{
            const dbProducts = await this.db.getProductsByIds(productIdList);

            const orderItems = dbProducts.map((dbProduct)=>{
                //find the match product inside requisition array
                const requisitionProduct = requestProducts.find((item)=>{
                    return item.id === dbProduct.id
                });

                if(!requisitionProduct){
                    throw new Error('Produto não encontrado.');
                }

                if(requisitionProduct.amount > dbProduct.amount){
                    throw new Error('Quantidade insuficiente.');
                }
                
                //create a new object to post into db and process in payment service
                return {
                    id: dbProduct.id,
                    title: dbProduct.title,
                    quantity: requisitionProduct.amount,
                    unit_price: dbProduct.price,
                    discount: dbProduct.discount
                }
            })

            return orderItems;
        }
        catch(err: any){
            throw new Error(err);
        }
    }
}