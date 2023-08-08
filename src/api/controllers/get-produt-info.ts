import { DataBase } from "../services/data-base";

export default async function getProductInfo(
    id: any
){
    const db = new DataBase();

    try{
        return await db.getProductInfo(id);
    }
    catch(err: any){
        throw new Error(err.message);
    }
}