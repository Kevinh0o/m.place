import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function getCommentByUser(
    productId: number,
    token: string
){
    const user: any = TokenUtils.verifyToken(token);
    

    if(!productId){
        throw new Error('Produto não encontrado.');
    }

    if(!user.id){
        throw new Error('Usuário inválido.');
    }
    
    const db = new DataBase();

    try{
        return await db.getCommentsByUserId(productId, user.id);
    }
    catch(err: any){
        throw new Error(err.message);
    }
}