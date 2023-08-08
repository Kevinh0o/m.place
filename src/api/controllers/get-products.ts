import { DataBase } from "../services/data-base";

export default async function getProducts(
    search: string, 
    minPrice: number, 
    maxPrice: number, 
    brand: string, 
    sortby: string,
    page: number
){
    const db = new DataBase();

    try{
        return await db.getProducts(search, minPrice, maxPrice, brand, sortby, page);
    }
    catch(err: any){
        throw new Error(err.message);
    }
}