import createUser from "@/api/controllers/create-user";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'POST') {
        const { username, password } = req.body;
        
        try{
            await createUser(username, password);
            return res.status(200).json('Usuário criado com sucesso.');
        }
        catch(err: any){
            return res.status(409).json(err.message);
        }

    }
    return res.status(400).json('Bad request.');
}