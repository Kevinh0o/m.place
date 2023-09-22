import updateComment from "@/api/controllers/update-comment";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'PUT') {
        const { productId, content } = req.body;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(403).json('Acesso negado.');
        }

        try{
            const newProduct = await updateComment(token, productId, content);
            return res.status(200).json('comentario atualizado com sucesso.');
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }

    }
    return res.status(400).json('Bad request.');
}