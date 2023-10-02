import { Order } from "../entities/order";
import { TokenUtils } from "../utils/token-utils";

type Product = {
    id: number,
    amount: number
}

export default async function createOrder(
    token: string,
    items: Product[]
){
    const user: any = TokenUtils.verifyToken(token);

    if(!user.id){
        throw new Error('invalid user.');
    }

    if(!items){
        throw new Error('Pedido vazio.');
    }

    const order = new Order(items);

    return await order.createOrder(user.id);
}