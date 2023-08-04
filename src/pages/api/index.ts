import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        const prisma = new PrismaClient;

        await prisma.$disconnect();
        return res.status(200).json({ Msg: 'hello' });
    }
    return res.status(400).json({ Error: 'Bad request.' });
}