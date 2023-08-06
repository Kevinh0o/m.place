import jwt from 'jsonwebtoken';

export class TokenUtils {
    private static secret = process.env.JWT_SECRET;

    static generateToken(payload: object){
        if(!this.secret){
            throw new Error();
        }

        return jwt.sign(payload, this.secret);
    }

    static verifyToken(token: string){
        if(!this.secret){
            throw new Error();
        }

        return jwt.verify(token, this.secret);
    }
}