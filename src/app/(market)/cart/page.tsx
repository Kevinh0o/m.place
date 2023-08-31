'use client';
import CartItem from "@/client/components/cart/cart-item";
import Button from "@/client/components/input/button";
import Fetch from "@/client/hooks/useFetch";
import LocalStorage from "@/client/hooks/useLocalStorage";
import useLocalStorage from "@/client/hooks/useLocalStorage";
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

    //TODO prevent duplicates, sum of all items
        const items =  LocalStorage({ key: 'cart', item: '', method: 'get' });

    return (
        <div className="p-5 pt-16 bg-gray-200 min-h-screen flex justify-center
        gap-2">
            <div className="w-1/2 min-h-full bg-white p-2 rounded-lg flex flex-col gap-2">
                {items && items.map((i: string)=>{
                    return(
                        <CartItem id={i} key={i}/>
                    )
                })}
            </div>
            <div className="w-[350px] bg-white rounded-lg p-4 self-start">
                <div className="flex justify-between items-end">
                    <p> Desconto: </p>
                    <div className="flex text-emerald-500">
                        <p className="text-lg">R$ -</p>
                        <p className="text-lg"> 100,000</p>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <p>subTotal:</p>
                    <div className="flex">
                        <p className="text-lg">R$</p>
                        <p className="text-lg"> 100,000</p>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <p>Total:</p>
                    <div className="flex">
                        <p className="text-lg">R$</p>
                        <p className="text-lg"> 100,000</p>
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