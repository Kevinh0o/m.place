import { User } from "../entities/user";
import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function deleteUser(
    token: string,
    password: string,
    username: string
){
    if(!token){
        throw new Error('invalid token');
    }

    const tokenData: any = TokenUtils.verifyToken(token);
    
    const db = new DataBase();
    const user = new User();
    user.set(
        username,
        password,
        tokenData.id
    )

    try{
        return await db.updateUser(user);
    }
    catch(err: any){
        throw new Error(err.message);
    }
}