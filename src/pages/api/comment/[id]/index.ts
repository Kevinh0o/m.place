import getComments from "@/api/controllers/get-comments";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        const { id, page, take } = req.query

        if(!id){
            return res.status(404).json('Comentario não encontrado.');
        }

        const convertedId = parseInt(id as string);
        const convertedPage = parseInt(page as string);
        const convertedTake = parseInt(take as string);

        try{
            const comments = await getComments(convertedId, convertedPage, convertedTake);
            return res.status(200).json(comments);
        }
        catch(err: any){
            return res.status(500).json(err.message);
        }

    }
    return res.status(400).json('Bad request.');
}