import { HashUtils } from "../utils/hash-utils";

export class User {
    public username = '';
    public password = '';
    public id = '';
    
    public async set(username: string, password: string, token?: string){
        if(username != '' || undefined){
            this.username = username;
        }
        if(password != '' || undefined){
            this.password = HashUtils.hash(password);
        }
        if(token){
            this.id = token
        }
    }
}