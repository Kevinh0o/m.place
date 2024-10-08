import loginUser from "@/api/controllers/login-user";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try{
            const login = await loginUser(username, password);
            return res.status(200).json({message: 'Usuário logado com sucesso.', data: login});
        }
        catch(err: any){
            return res.status(404).json(err.message);
        }

    }
    return res.status(400).json({ Error: 'Bad request.' });
}