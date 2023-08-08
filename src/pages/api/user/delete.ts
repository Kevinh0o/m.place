import deleteUser from "@/api/controllers/delete-user";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'DELETE') {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(200).json({ Error: 'Acesso negado.' });
        }

        try{
            const user = await deleteUser(token);
            return res.status(200).json({ Msg: 'Usuario deletado com sucesso!.' });
        }
        catch(err: any){
            return res.status(200).json({ Error: err.message });
        }
    }
    return res.status(400).json({ Error: 'Bad request.' });
}