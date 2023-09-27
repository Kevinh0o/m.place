import { DataBase } from "../services/data-base";

export default async function searchProducts(
    search: string
){
    const db = new DataBase();

    try{
        const products =  await db.searchProducts(search);

        return products;
    }
    catch(err: any){
        throw new Error(err.message);
    }
}