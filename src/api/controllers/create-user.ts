import { User } from "../entities/user";

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

    const user = new User();

    user.set(
        username,
        password
    )
    
    return user;
}