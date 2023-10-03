'use client';
import CartItem from "@/client/components/cart/cart-item";
import Button from "@/client/components/input/button";
import useLocalStorage from "@/client/hooks/useLocalStorage";
import usePost from "@/client/hooks/usePost";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cart() {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [unavalible, setUnavalible] = useState<string[]>([]);

    const router = useRouter();
    const { data: items }  =  useLocalStorage('cart');

    const order = items?.map((item)=>{
        return {
            id: parseInt(item),
            amount: 1,
        }
    })

    const { post, loading, response, error } = usePost({
        url: '/api/checkout',
        body: {
            items: order
        }
    });

    useEffect(()=>{
        if(response && response !== undefined){
            router.push(`/checkout/${response.data.body.id}`);
        }
        console.log(response)
    }, [response, error])

    useEffect(()=>{
        setTotal(price - discount);
    }, [price, discount])

    useEffect(()=>{
        if(items && items.length > 0 && total > 0 && unavalible.length === 0){
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [items, total])

    return (
        <div className="p-5 pt-16 bg-gray-200 h-screen flex justify-center
        gap-2">
            <div className="h-full md:max-w-screen-xl w-full bg-white rounded-md border border-gray-300
            shadow-sm overflow-auto">
                <div className="p-4 gap-2 flex flex-col">
                    <h1 className="text-xl font-semibold">
                        Carrinho de compras
                    </h1>
                    {error && 
                        <span className="text-red-500 text-center">{error.response.data}</span>
                    }
                    <div className="flex flex-col gap-2">
                        {items?.map((item: string, index: number)=>(
                            <CartItem
                                key={index}
                                id={item}
                                priceCounter={price}
                                setPriceCounter={setPrice}
                                setUnavalible={setUnavalible}
                                discountCounter={discount}
                                setDiscountCounter={setDiscount}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white fixed w-[300px] rounded-md
            border border-gray-300 shadow-md bottom-2 p-4 flex flex-col
            gap-1">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {price}</span>
                </div>
                <div className="flex justify-between">
                    <span>Desconto</span>
                    <span>R$ {discount}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total</span>
                    <span>R$ {total}</span>
                </div>
                <Button 
                    type="submit" 
                    enabled={isButtonEnabled}
                    onClick={post}
                    loading={loading}
                >
                    Finalizar compra
                </Button>
            </div>
        </div>
    )
}