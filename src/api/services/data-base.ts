import { Brand, PrismaClient } from "@prisma/client";
import { User } from "../entities/user";
import { Product } from "../entities/product";

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

    public async getUserInfo(id: string){
        try{
            const data = await this.prisma.user.findUnique({
                where: {
                    id: id
                },
                select: {
                    username: true,
                    comments: true,
                    orders: true,
                    type: true,
                    password: false
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

    public async updateUser(user: User){
        try{
            await this.prisma.user.update({
                where: {
                    id: user.id
                },
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

    public async deleteUser(id: string){
        try{
            const data = await this.prisma.user.delete({
                where: {
                    id: id
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

    public async createBrand({ id }: Brand){
        try{
            await this.prisma.brand.create({
                data: {
                    id: id
                }
            });
            await this.prisma.$disconnect();
        }
        catch(err: any){
            await this.prisma.$disconnect();
            throw new Error('Marca já existente.');
        }
        this.prisma.$disconnect();
    }

    public async getBrands(){
        try{
            const data = await this.prisma.brand.findMany({
                select: {
                    id: true,
                    Products: false
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

    public async createProduct(product: Product){
        try{
            await this.prisma.product.create({
                data: {
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    amount: product.amount,
                    variations: product.variations,
                    colors: product.colors,
                    images: product.images,
                    brandId: product.brandId
                }
            });
            await this.prisma.$disconnect();
        }
        catch(err: any){
            await this.prisma.$disconnect();
            throw new Error('Produto já existente.');
        }
        this.prisma.$disconnect();
    }

    public async getProducts(search: string, minPrice: number, maxPrice: number, brand: string, sortby: any, page: number, take: number){
        if(!search){
            search = '';
        }
        if(!brand){
            brand = '';
        }

        //pagination
        const skip = ( page - 1 )  * 10;

        try{
            const data = await this.prisma.product.findMany({
                skip: skip,
                take: take,
                where: {
                    title: {
                        contains: search,
                        mode: 'insensitive',
                    },
                    price: {
                        gt: parseInt(minPrice), //somehow it works just like this
                        lt: parseInt(maxPrice)
                    },
                    brandId: {
                        contains: brand
                    }
                },
                orderBy: {
                    price: sortby
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