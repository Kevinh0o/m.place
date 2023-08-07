import getBrands from "@/api/controllers/get-brands";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    if (req.method === 'GET') {
        
        try{
            const brands = await getBrands();
            return res.status(200).json({ Brand: brands });
        }
        catch(err: any){
            return res.status(200).json({ Error: err.message });
        }
    }
    return res.status(400).json({ Error: 'Bad request.' });
}