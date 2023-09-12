import { DataBase } from "../services/data-base";
import { HashUtils } from "../utils/hash-utils";
import { TokenUtils } from "../utils/token-utils";

export default async function loginUser(
    username: string, 
    password: string,
){
    if(!username){
        throw new Error('invalid username');
    }

    if(!password){
        throw new Error('invalid password');
    }

    const db = new DataBase();

    const fetchedUser: any = await db.getUser(username, true);

    if(!fetchedUser){
        throw new Error('Usuário não existe.');
    }
    
    const isPasswordValid = await HashUtils.compareHash(password, fetchedUser.password);

    if(isPasswordValid == false){
        throw new Error('A senha está incorreta.');
    }

    const token = TokenUtils.generateToken({
        id: fetchedUser.id,
        role: fetchedUser.type
    });

    return token;
}