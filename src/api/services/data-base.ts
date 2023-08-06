import { PrismaClient } from "@prisma/client";
import { User } from "../entities/user";

export class DataBase {
    private prisma;

    constructor(){
        this.prisma = new PrismaClient();
    }

    public async createUser(user: User){
        try{
            await this.prisma.user.create({
                data: user
            });
            await this.prisma.$disconnect();
        }
        catch(err: any){
            await this.prisma.$disconnect();
            throw new Error('Usuário já existente.');
        }
        this.prisma.$disconnect();
    }

    public async getUser(user: string, getPassword: boolean){
        try{
            const data = await this.prisma.user.findUnique({
                where: {
                    username: user
                },
                select: {
                    username: true,
                    type: true,
                    id: true,
                    password: getPassword
                }
            });
            await this.prisma.$disconnect();
            return data;
        }
        catch(err: any){
            await this.prisma.$disconnect();
            throw new Error(err.message);
        }
        await this.prisma.$disconnect();
    }
}