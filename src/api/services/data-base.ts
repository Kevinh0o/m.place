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
        }
        catch{
            this.prisma.$disconnect();
            throw new Error('unable to create user.');
        }
        this.prisma.$disconnect();
    }
}