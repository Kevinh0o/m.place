'use client';
import CartItem from "@/client/components/cart/cart-item";
import Button from "@/client/components/input/button";
import useLocalStorage from "@/client/hooks/useLocalStorage";
import { empty } from "@prisma/client/runtime/library";
import { useEffect, useState } from "react";

type Props = {
}

type Product = {
    title: string;
    discount: number;
    price: number;
    images: string[];
    id: string;
}

export default function Cart() {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);

    const { data: items, push }  =  useLocalStorage('cart');

    useEffect(()=>{
        setTotal(price - discount);
    }, [price, discount])

    function handleCLick(){
        push('1');
    }

    return (
        <div className="p-5 pt-16 bg-gray-200 min-h-screen flex justify-center
        gap-2">
            <div className="w-1/2 min-h-full bg-white p-2 rounded-lg flex flex-col gap-2">

            <button 
                className="bg-green-600 text-white rounded-md"
                onClick={handleCLick}
            >
                click
            </button>

                {items && items.map((i: string)=>{
                    return(
                        <CartItem 
                            id={i} 
                            key={i}
                            setPriceCounter={setPrice}
                            priceCounter={price}
                            setDiscountCounter={setDiscount}
                            discountCounter={discount}
                        />
                    )
                })}
            </div>
            <div className="w-[350px] bg-white rounded-lg p-4 self-start">
                <div className="flex justify-between items-end">
                    <p>subTotal:</p>
                    <div className="flex">
                        <p className="text-lg">R$</p>
                        <p className="text-lg"> { price }</p>
                    </div>
                </div>
                {discount > 0 &&
                    <div className="flex justify-between items-end">
                        <p> Desconto: </p>
                        <div className="flex text-emerald-500">
                            <p className="text-lg">R$ -</p>
                            <p className="text-lg"> { discount } </p>
                        </div>
                    </div>
                }
                <div className="flex justify-between items-end">
                    <p>Total:</p>
                    <div className="flex">
                        <p className="text-lg"> R$ </p>
                        <p className="text-lg"> { total } </p>
                    </div>
                </div>
                <Button 
                    type="button"
                >
                    Finalizar compra
                </Button>
            </div>
        </div>
    )
}