import bcrypt  from 'bcrypt'

export class HashUtils {

    static async hash(string: string){
        const hashValue = bcrypt.hashSync(string, 10);
        return hashValue;
    }

    static async compareHash(comparedString: string, hash: string){
        const checkIfItsSameString = bcrypt.compareSync(comparedString, hash);

        if(checkIfItsSameString){
            return true;
        }

        return false;
    }
}