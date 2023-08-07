import createBrand from "@/api/controllers/create-brand";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'POST') {
        const { brand } = req.body;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(200).json({ Error: 'Acesso negado.' });
        }

        try{
            const newBrand = await createBrand(brand, token);
            return res.status(200).json({ Msg: 'marca registrada com nome de:' });
        }
        catch(err: any){
            return res.status(200).json({ Error: err.message });
        }

    }
    return res.status(400).json({ Error: 'Bad request.' });
}