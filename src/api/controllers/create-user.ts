import { User } from "../entities/user";
import { DataBase } from "../services/data-base";

export default async function createUser(
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
    const user = new User();

    user.set(
        username,
        password
    )

    const newUser = await db.createUser(user);
    
    return newUser;
}