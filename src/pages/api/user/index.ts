import getUserInfo from "@/api/controllers/get-user-info";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(403).json('Acesso negado.');
        }

        try{
            const user = await getUserInfo(token);
            return res.status(200).json(user);
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }
    }
    return res.status(400).json('Bad request.');
}