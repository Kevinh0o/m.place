import { Comment } from "../entities/comment";
import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function deleteComment(
    token: string,
    id: number,
){
    const user: any = TokenUtils.verifyToken(token);

    if(!id){
        throw new Error('Informações inválidas.');
    }

    if(!user.id){
        throw new Error('Usuário não autenticado.');
    }

    const db = new DataBase();

    try{
        return await db.deleteComment(id);
    }
    catch(err: any){
        throw new Error(err);
    }
}