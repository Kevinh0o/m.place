import { Brand } from "../entities/brand";
import { DataBase } from "../services/data-base";

export default async function getBrands(){
    const db = new DataBase();

    try{
        return await db.getBrands();
    }
    catch(err: any){
        throw new Error(err);
    }
}