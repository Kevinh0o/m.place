import jwt from 'jsonwebtoken';

export class TokenUtils {
    private static secret = process.env.JWT_SECRET;

    static generateToken(payload: object){
        if(!this.secret){
            throw new Error('unable to generate token.');
        }

        return jwt.sign(payload, this.secret);
    }

    static async verifyToken(token: string){
        if(!this.secret){
            throw new Error('unable to verify token.');
        }

        return jwt.verify(token, this.secret);
    }
}