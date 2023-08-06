import bcrypt  from 'bcrypt'

export class HashUtils {

    static hash(string: string){
        
        return bcrypt.hashSync(string, 1);
    }

    static async compareHash(comparedString: string, hashedString: string){

        return bcrypt.compareSync(comparedString, hashedString);
    }
}