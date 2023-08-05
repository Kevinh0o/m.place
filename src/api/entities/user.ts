import { HashUtils } from "../utils/hash-utils";

export class User {
    public username = '';
    public password = '';
    
    public async set(username: string, password: string){
        if(username != '' || undefined){
            this.username = username;
        }
        if(password != '' || undefined){
            this.password = await HashUtils.hash(password);
        }
    }
}