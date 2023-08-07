import { Brand } from "../entities/brand";
import { DataBase } from "../services/data-base";
import { TokenUtils } from "../utils/token-utils";

export default async function createBrand(
    brandTitle: string,
    token: string
){
    const user: any = TokenUtils.verifyToken(token);

    if(user.role != 'ADMIN'){
        throw new Error('Acesso negado.');
    }

    if(!brandTitle){
        throw new Error('invalid brand name.');
    }

    const db = new DataBase();

    const brand = new Brand(
        brandTitle,
    );

    try{
        return await db.createBrand(brand);
    }
    catch(err: any){
        throw new Error(err);
    }
}