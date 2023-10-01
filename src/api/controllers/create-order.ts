import { DataBase } from "../services/data-base";
import { Payment } from "../services/payment";
import { TokenUtils } from "../utils/token-utils";

type Product = {
    id: number,
    amount: number
}

export default async function createOrder(
    token: string,
    items: Product[]
){
    const user: any = TokenUtils.verifyToken(token);

    if(!user.id){
        throw new Error('invalid user.');
    }

    //verify products
    const productList = items.map((item)=>{
        if(!item.id || !item.amount){
            throw new Error('Itens inválidos.');
        }

        return item.id
    })

    const db = new DataBase();

    //check if products exists and if amount is enough to complete the purshase
    try{
        const dbProducts = await db.getProductsByIds(productList);

        const orderItems = dbProducts.map((product)=>{
            //find the match product inside requisition array
            const requisitionProduct = items.find((item)=>{return item.id === product.id});

            if(!requisitionProduct){
                throw new Error('Produto não encontrado.');
            }

            if(requisitionProduct.amount > product.amount){
                throw new Error('Quantidade insuficiente.');
            }
            
            //create a new object to post into db and process in payment service
            return {
                id: product.id,
                title: product.title,
                quantity: requisitionProduct.amount,
                unit_price: product.price,
                discount: product.discount
            }
        })

        const createOrder = await db.createOrder(user.id, orderItems);

        const promises = await Promise.all([dbProducts, createOrder])
        .then(async()=>{
                const order = await Payment.createOrder(orderItems);
                return order;
            })
        
        return promises;
    }
    catch(err: any){
        throw new Error(err);
    }
}