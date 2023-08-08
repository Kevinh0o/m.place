import { Product } from "../entities/product";
import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function deleteProduct(
    token: string,
    id?: any
){
    const user: any = TokenUtils.verifyToken(token);

    if(user.role != 'USER'){
        throw new Error('Acesso negado.');
    }

    const db = new DataBase();

    try{
        return await db.deleteProduct(id);
    }
    catch(err: any){
        throw new Error(err);
    }
}