import mercadopago from 'mercadopago';

type Product = {
    id: number,
    title: string,
    unit_price: number,
    quantity: number,
    discount: number
}

export class Payment{

    static createOrder(products: Product[]){
        mercadopago.configure({
            access_token: process.env.PAYMENT_PRIVATE_KEY || ''
        });

        //map products to mercadopago format
        const items = products.map((product)=>{
            return {
                title: product.title,
                unit_price: product.unit_price - product.discount,
                quantity: product.quantity
            }
        })

        const preference = {
            items: items
        }

        try{
            const order = mercadopago.preferences.create(preference);
            return order;
        }
        catch(err: any){
            throw new Error('Erro ao criar pedido.');
        }
    }
}