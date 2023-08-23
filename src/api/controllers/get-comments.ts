import { DataBase } from "../services/data-base";

export default async function getComments(
    productId: number, 
    page: number,
    take: number
){
    const db = new DataBase();

    try{
        return await db.getComments(productId, page, take);
    }
    catch(err: any){
        throw new Error(err.message);
    }
}