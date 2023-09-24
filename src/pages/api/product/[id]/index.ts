import getProductInfo from "@/api/controllers/get-produt-info";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        const { id } = req.query

        if(!id){
            return res.status(404).json('Produto não encontrado.');
        }

        try{
            const newProduct = await getProductInfo(id);
            return res.status(200).json( newProduct );
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }

    }
    return res.status(400).json('Bad request.');
}