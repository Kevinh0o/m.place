import createUser from "@/api/controllers/create-user";
import { DataBase } from "@/api/services/data-base";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'POST') {
        const { username, password } = req.body;
        const db = new DataBase();

        try{
            const user = await createUser(username, password);
            await db.createUser(user);
            return res.status(200).json({ Msg: 'User Created, Success!' });
        }
        catch(err: any){
            return res.status(200).json({ Error: err.message });
        }

    }
    return res.status(400).json({ Error: 'Bad request.' });
}