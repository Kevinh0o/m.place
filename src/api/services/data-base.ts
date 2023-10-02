import { Brand, Order, Prisma, PrismaClient } from "@prisma/client";
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
            if(err instanceof Prisma.PrismaClientKnownRequestError){
                if(err.code === 'P2002'){
                    throw new Error('Usuário já existente.');
                }
            }
            throw new Error('Erro no servidor.');
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
                    id: true,
                    username: true,
                    comments: true,
                    orders: true,
                    type: true,
                    password: false
                },
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
                data: {
                    password: user.password,
                    username: user.username
                }
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
            const deleteUser = await this.prisma.user.delete({
                where: {
                    id: id
                }
            })
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
                        contains: brand,
                        mode: 'insensitive',
                    }
                },
                select: {
                    title: true,
                    id: true,
                    price: true,
                    discount: true,
                    images: true,
                    
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

    public async getProductsByIds(ids: number[]){

        try{
            const data = await this.prisma.product.findMany({
                where: {
                    id: {
                        in: ids
                    }
                }
            });
            return data;
        }
        catch(err: any){
            throw new Error('Erro ao processar produtos e(ou) produtos não encontrados.');
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

    public async getComments(productId: number, page: number, take: number){

        //pagination
        const skip = ( page - 1 )  * 10;

        try{
            const data = await this.prisma.comment.findMany({
                skip: skip,
                take: take,
                where: {
                    productId: {
                        equals: productId
                    },
                },
                orderBy: {
                    createdAt: 'desc'
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

    public async updateComment(comment: Comment){
        try{
            await this.prisma.comment.update({
                where: {
                    userId: comment.id,
                    productId: comment.productId,
                },
                data: {
                    content: comment.content
                }
            });
        }
        catch(err: any){
            throw new Error('Erro no servidor.');
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async deleteComment(comment: Comment){
        try{
            await this.prisma.comment.delete({
                where: {
                    userId: comment.id,
                    productId: comment.productId,
                }
            });
        }
        catch(err: any){
            throw new Error('Produto não encontrado');
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async searchProducts(search: string){
        if(!search){
            search = '';
        }

        try{
            const data = await this.prisma.product.findMany({
                take: 10,
                where: {
                    title: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
                select: {
                    title: true,
                    id: true,
                    price: true,
                    discount: true,
                    images: true,
                }
            });

            if(data.length !== 0){
                return data;
            }

            throw new Error('Produto não encontrado');
        }
        catch(err: any){
            throw new Error(err.message);
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async createOrder(userId: string, products: any){
        let totalPrice = 0;
        let totalDiscount = 0;

        products.forEach((product: any)=>{
            totalPrice = product.unit_price * product.quantity + totalPrice;
            totalDiscount = product.discount * product.quantity + totalDiscount;
        })

        totalPrice = totalPrice - totalDiscount;

        try{
            const newOrder = await  this.prisma.order.create({
                data: {
                    userId: userId,
                    totalPrice: totalPrice
                }
            });

            const orderId = newOrder.id;
            
            //create order items for the new order
            const updatedItems = await Promise.all(
                products.map(async (product: any) => {

                    await this.prisma.orderItem.create({
                        data: {
                            amount: product.quantity,
                            productId: product.id,
                            orderId: orderId, // Associate the item with the orderId
                        },
                    });
                })
            );

            return orderId;
        }
        catch(err: any){
            throw new Error('Erro ao processar pedido.' + err.message);
        }
        finally{
            await this.prisma.$disconnect();
        }
    }

    public async getOrders(page: number, take: number){

        //pagination
        const skip = ( page - 1 )  * 10;

        try{
            const data = await this.prisma.order.findMany({
                skip: skip,
                take: take,
                orderBy: {
                    createdAt: 'desc'
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

    public async getOrdersByUserId(userId: string, page: number, take: number){

        //pagination
        const skip = ( page - 1 )  * 10;

        try{
            const data = await this.prisma.order.findMany({
                skip: skip,
                take: take,
                where: {
                    userId: {
                        equals: userId
                    },
                },
                orderBy: {
                    createdAt: 'desc'
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

    public async getOrderById(orderId: number){

        try{
            const data = await this.prisma.order.findUnique({
                where: {
                    id: orderId
                },
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
}