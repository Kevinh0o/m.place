import mercadopago from 'mercadopago';

type Product = {
    title: string,
    unit_price: number,
    quantity: number
}

export class Payment{

    static createOrder(products: Product[]){
        mercadopago.configure({
            access_token: process.env.PAYMENT_PRIVATE_KEY || ''
        });

        const preference = {
            items: products,
        }

        mercadopago.preferences.create(preference)
            .then((response)=>{
                return response.body.id;
            }).catch((error: any)=>{
                throw new Error(error);
            });
    }
}