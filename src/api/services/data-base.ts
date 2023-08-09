import { Brand, PrismaClient } from "@prisma/client";
import { User } from "../entities/user";
import { Product } from "../entities/product";
import { Comment } from "../entities/comment";

export class DataBase {
    private prisma;

    constructor(){
        this.prisma = new PrismaClient();
    }

    public async createUser(user: User){
        try{
            await this.prisma.user.create({
                data: {
                    username: user.username,
                    password: user.password
                }
            })
        }
        catch(err: any){
            throw new Error('Usuário já existente.');
        }
        finally{
            await this.prisma.$disconnect();
        }
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
            return data;
        }
        catch(err: any){
            throw new Error(err.message);
        }
        finally{
            await this.prisma.$disconnect();
        }
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
            return data;
        }
        catch(err: any){
            throw new Error(err.message);
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async updateUser(user: User){
        try{
            await this.prisma.user.update({
                where: {
                    id: user.id
                },
                data: user
            });
        }
        catch(err: any){
            throw new Error('Usuário já existente.');
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async deleteUser(id: string){
        try{
            const data = await this.prisma.user.delete({
                where: {
                    id: id
                }
            });
            return data;
        }
        catch(err: any){
            throw new Error(err.message);
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async createBrand({ id }: Brand){
        try{
            await this.prisma.brand.create({
                data: {
                    id: id
                }
            });
        }
        catch(err: any){
            throw new Error('Marca já existente.');
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async getBrands(){
        try{
            const data = await this.prisma.brand.findMany({
                select: {
                    id: true,
                    Products: false
                }
            });
            return data;
        }
        catch(err: any){
            throw new Error(err.message);
        }
        finally{
            await this.prisma.$disconnect();
        }
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
        }
        catch(err: any){
            throw new Error('Produto já existente.');
        }
        finally{
            await this.prisma.$disconnect();
        }
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
                select: {
                    title: true,
                    id: true,
                    price: true,
                    discount: true
                },
                orderBy: {
                    price: sortby
                }
            });
            return data;
        }
        catch(err: any){
            throw new Error(err.message);
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async getProductInfo(id: any){
        const newId = parseInt(id);
        try{
            const data = await this.prisma.product.findUnique({
                where: {
                    id: newId
                }
            });
            return data;
        }
        catch(err: any){
            throw new Error('Produto não existe.');
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async updateProduct(product: Product, id: any){
        const newId = parseInt(id);
        try{
            await this.prisma.product.update({
                where: {
                    id: newId
                },
                data: product
            });
        }
        catch(err: any){
            throw new Error('Produto não existe.');
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async deleteProduct(id: any){
        const newId = parseInt(id);
        try{
            await this.prisma.product.delete({
                where: {
                    id: newId
                }
            });
        }
        catch(err: any){
            throw new Error('Produto não existe.');
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async createComment(comment: Comment){
        try{
            await this.prisma.comment.create({
                data: {
                    userId: comment.id,
                    productId: comment.productId,
                    content: comment.content
                }
            });
        }
        catch(err: any){
            throw new Error('Comentario já existente.');
        }
        finally{
            await this.prisma.$disconnect();
        }
    }
}