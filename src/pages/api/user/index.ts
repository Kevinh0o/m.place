import getUserInfo from "@/api/controllers/get-user-info";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(200).json({ Error: 'Acesso negado.' });
        }

        try{
            const user = await getUserInfo(token);
            return res.status(200).json({ Msg: user });
        }
        catch(err: any){
            return res.status(200).json({ Error: err.message });
        }
    }
    return res.status(400).json({ Error: 'Bad request.' });
}