import { Comment } from "../entities/comment";
import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function updateComment(
    token: string,
    id: number,
    content: string
){
    const user: any = TokenUtils.verifyToken(token);

    if(!id){
        throw new Error('Informações inválidas.');
    }

    if(!user.id){
        throw new Error('invalid user.');
    }

    const db = new DataBase();

    try{
        return await db.updateComment(id, content);
    }
    catch(err: any){
        throw new Error(err);
    }
}