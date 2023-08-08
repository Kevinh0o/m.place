import getProductInfo from "@/api/controllers/get-produt-info";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        const { id } = req.query

        if(!id){
            return res.status(200).json({ Error: 'Produto não encontrado.' });
        }

        try{
            const newProduct = await getProductInfo(id);
            return res.status(200).json({ Product: newProduct });
        }
        catch(err: any){
            return res.status(200).json({ Error: err.message });
        }

    }
    return res.status(400).json({ Error: 'Bad request.' });
}