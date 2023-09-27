import searchProducts from "@/api/controllers/searchProducts";
import { NextApiRequest, NextApiResponse } from "next"

type QueryParams = {
    search?: string;
}

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'POST') {
        const {
            search = '', 
        }: QueryParams = req.query;

        try{
            const products = await searchProducts(search);
            return res.status(200).json(products);
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }

    }
    return res.status(400).json('Bad request.');
}