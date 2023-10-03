'use client';
import useFetch from "@/client/hooks/useFetch";
import useLocalStorage from "@/client/hooks/useLocalStorage";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type Props = {
    id: string;
    priceCounter: number;
    setPriceCounter: Function;
    discountCounter: number;
    setDiscountCounter: Function;
    setUnavalible: Function;
}

type Product = {
    title: string;
    discount: number;
    price: number;
    images: string[];
    id: string;
    amount: number;
}

export default function CartItem({ 
    id,
    setPriceCounter,
    setDiscountCounter,
    setUnavalible
}: Props) {

    const req = {
        url: '/api/product/' + id,
        cache: 'product-' + id
    }

    const {data: product, isFetching} = useFetch<Product>(req);

    const { remove } = useLocalStorage('cart');

    function handleCLick(){
        //remove from unavalible list manualy
        setUnavalible((prev: string[])=> prev.filter((item)=> item !== id));
        remove(id);

    }

    useEffect(()=>{
        setPriceCounter((prev: number)=> prev + product?.price || 0);
        setDiscountCounter((prev: number)=> prev + product?.discount || 0);

    }, [ , product])
    
    useEffect(()=>{
        if(!product || product.amount <= 0 && isFetching !== true){
            //add to unavalible list
            setUnavalible((prev: string[])=> [...prev, id]);
        }

        if(product){
            //remove from unavalible list automaticaly
            setUnavalible((prev: string[])=> prev.filter((item)=> item !== id));
        }
    }, [product, isFetching])

    return (
        <div className="w-full h-[100px] border border-gray-300 p-2 flex 
        justify-between items-center gap-2 rounded-md">
            <div className="flex h-full gap-2">
                <div className="border border-gray-300 rounded-md w-[100px] 
                h-full p-1">
                    {product?.images &&
                        <Image
                            src={product.images[0]}
                            alt={"Imagem do produto" + product.title}
                            width={100}
                            height={50}
                            className="object-contain h-full"
                        />
                    }
                </div>
                <div className="h-full">
                    {product ?
                        <Link 
                            href={'/products/' + product.id}
                            className="mouse-pointer hover:underline"
                        >
                            <h1> {product.title} </h1>
                        </Link>
                        : <h1 className="text-sm">  </h1>
                    }
                </div>
                {product && product.amount <= 0 &&
                    <span className="text-gray-500 text-sm">
                        Produto indisponivel.
                    </span>
                }
                {!product &&
                    <span className="text-red-gray text-sm">
                        Produto indisponivel.
                    </span>
                }
            </div>
            <div className="w-1/4 h-full flex flex-col items-end justify-between">
                <button
                    className="text-red-500 underline text-sm"
                    onClick={handleCLick}
                >
                    Remover
                </button>
                {product && product.discount > 0 &&
                    <div className="line-through text-gray-500 text-sm">
                        <span>R$</span>
                        <span> {product.discount} </span>
                    </div>
                }
                <div className="flex">
                    <p>R$</p>
                    <p> {product && product.price} </p>
                </div>
            </div>
        </div>
    )
}