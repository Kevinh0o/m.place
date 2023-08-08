import deleteProduct from "@/api/controllers/delete-product";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'DELETE') {
        const { id } = req.query
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(200).json({ Error: 'Acesso negado.' });
        }

        if(!id){
            return res.status(200).json({ Error: 'Produto não encontrado.' });
        }

        try{
            const newProduct = await deleteProduct(token, id);
            return res.status(200).json({ Msg: 'produto deletado com sucesso' });
        }
        catch(err: any){
            return res.status(200).json({ Error: err.message });
        }

    }
    return res.status(400).json({ Error: 'Bad request.' });
}