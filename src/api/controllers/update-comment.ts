import { Comment } from "../entities/comment";
import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function updateComment(
    token: string,
    productId: number,
    content: string
){
    const user: any = TokenUtils.verifyToken(token);

    if(!productId){
        throw new Error('invalid product info.');
    }

    if(!user.id){
        throw new Error('invalid user.');
    }

    const db = new DataBase();

    const comment = new Comment(
        productId,
        user.id,
        content
    );

    try{
        return await db.updateComment(comment);
    }
    catch(err: any){
        throw new Error(err);
    }
}