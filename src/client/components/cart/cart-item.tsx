'use client';
import useFetch from "@/client/hooks/useFetch";
import useLocalStorage from "@/client/hooks/useLocalStorage";
import Image from "next/image";
import Link from "next/link";

type Props = {
    id: string;
}

type Product = {
    title: string;
    discount: number;
    price: number;
    images: string[];
    id: string;
}

export default function CartItem({ id }: Props) {

    const req = {
        url: '/api/product/' + id,
        cache: 'product-' + id
    }
    const {data: product, isFetching} = useFetch<Product>(req);

    const { remove } = useLocalStorage('cart');

    function handleCLick(){
        remove(id);
    }

    return (
        <div className="w-full h-[100px] border p-2 flex justify-between items-center gap-2">
            <div className="border w-[100px] h-full">
                {product &&
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
                {product &&
                    <Link 
                        href={'/products/' + product.id}
                        className="mouse-pointer hover:underline"
                    >
                        <h1> {product.title} </h1>
                    </Link>
                }
            </div>
            <div className="w-1/4 h-full flex flex-col items-end justify-end">
                <button
                    className="text-red-500 underline text-sm"
                    onClick={handleCLick}
                >
                    Remover
                </button>
                <div className="flex line-through text-gray-500 text-sm">
                    <p>R$</p>
                    <p> {product && product.discount} </p>
                </div>
                <div className="flex">
                    <p>R$</p>
                    <p> {product && product.price} </p>
                </div>
            </div>
        </div>
    )
}