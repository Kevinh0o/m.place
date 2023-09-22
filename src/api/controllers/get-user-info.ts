import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function getUserInfo(
    token: string, 
){
    if(!token){
        throw new Error('invalid token');
    }

    const user: any = await TokenUtils.verifyToken(token);
    
    const db = new DataBase();

    try{
        return await db.getUserInfo(user.id);
    }
    catch(err: any){
        throw new Error(err.message);
    }
}