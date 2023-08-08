import updateUser from "@/api/controllers/update-user";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'PUT') {
        const { product } = req.body;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(200).json({ Error: 'Acesso negado.' });
        }

        try{
            const user = await updateUser(token, product.user, product.password);
            return res.status(200).json({ Msg: 'Usuario atualizado com sucesso' });
        }
        catch(err: any){
            return res.status(200).json({ Error: err.message });
        }

    }
    return res.status(400).json({ Error: 'Bad request.' });
}