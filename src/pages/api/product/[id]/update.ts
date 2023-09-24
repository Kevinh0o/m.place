import updateProduct from "@/api/controllers/update.product";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'PUT') {
        const { product } = req.body;
        const { id } = req.query
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(403).json('Acesso negado.');
        }

        if(!id){
            return res.status(404).json('Produto não encontrado.');
        }

        try{
            const newProduct = await updateProduct(token, product, id);
            return res.status(200).json('produto atualizado com sucesso');
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }

    }
    return res.status(400).json('Bad request.');
}