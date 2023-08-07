import { Product } from "../entities/product";
import { DataBase } from "../services/data-base";
import { ProductType } from "../types/product-types";
import { TokenUtils } from "../utils/token-utils";

export default async function createProduct(
    token: string,
    productProps: {
        title: string,
        description: string,
        price: number,
        amount: number,
        variations: [],
        colors: [],
        images: [],
        brand: string
    }
){
    const user: any = TokenUtils.verifyToken(token);

    if(user.role != 'USER'){ //mudar pls :p
        throw new Error('Acesso negado.');
    }

    if(
        !productProps.title || 
        !productProps.description || 
        !productProps.price || 
        !productProps.amount || 
        !productProps.variations || 
        !productProps.colors || 
        !productProps.images || 
        !productProps.brand
    ){
        throw new Error('invalid product info.');
    }

    const db = new DataBase();

    const product = new Product(
        productProps
    );

    try{
        return await db.createProduct(product);
    }
    catch(err: any){
        throw new Error(err);
    }
}