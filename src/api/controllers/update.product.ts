import { Product } from "../entities/product";
import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function updateProduct(
    token: string,
    productProps: {
        title: string,
        description: string,
        price: number,
        amount: number,
        variations: [],
        colors: [],
        images: [],
        brand: string,
    },
    id?: any
){
    const user: any = TokenUtils.verifyToken(token);

    if(user.role != 'ADMIN'){
        throw new Error('Acesso negado.');
    }

    const db = new DataBase();

    const product = new Product(
        productProps
    );

    try{
        return await db.updateProduct(product, id);
    }
    catch(err: any){
        throw new Error(err);
    }
}