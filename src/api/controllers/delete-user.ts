import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function deleteUser(
    token: string, 
){
    if(!token){
        throw new Error('invalid token');
    }

    const user: any = TokenUtils.verifyToken(token);
    
    const db = new DataBase();

    try{
        return await db.deleteUser(user.id);
    }
    catch(err: any){
        throw new Error(err.message);
    }
}