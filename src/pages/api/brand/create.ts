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
            return res.status(403).json('Acesso negado.');
        }

        try{
            const newBrand = await createBrand(brand, token);
            return res.status(200).json('marca registrada com nome de:');
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }

    }
    return res.status(400).json('Bad request.');
}