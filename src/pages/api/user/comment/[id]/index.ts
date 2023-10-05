import getCommentByUser from "@/api/controllers/get-comment-by-user-id";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        const { id } = req.query

        if(!id){
            return res.status(404).json('Comentario não encontrado.');
        }

        const convertedId = parseInt(id as string);

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(403).json('Acesso negado.');
        }

        try{
            const comment = await getCommentByUser(convertedId, token);
            return res.status(200).json(comment[0]);
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }
    }
    return res.status(400).json('Bad request.');
}