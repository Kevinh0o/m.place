import getProducts from "@/api/controllers/get-products";
import { NextApiRequest, NextApiResponse } from "next"

type QueryParams = {
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    brand?: string;
    sortby?: 'asc' | 'desc';
    page?: number;
    take?: number
}

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        const {
            search = '', 
            minPrice = 0, 
            maxPrice = 999999999, 
            brand = '',
            sortby = 'desc',
            page = 1,
            take = 10
        }: QueryParams = req.query;

        try{
            const products = await getProducts(search, minPrice, maxPrice, brand, sortby, page, take);
            return res.status(200).json( products );
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }

    }
    return res.status(400).json('Bad request.');
}