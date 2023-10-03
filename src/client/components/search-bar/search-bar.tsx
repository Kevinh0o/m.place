'use client';
import { useContext, useEffect, useState } from "react";
import BluryBackground from "./blury-background";
import { HeaderContext } from "@/client/contexts/header-context";
import Product from "../store/product";
import usePost from "@/client/hooks/usePost";
import LoadingBlack from "../icons/loading-animation-black";
import Link from "next/link";

type Product = {
    id: string;
    title: string;
    price: number;
    images: string[];
    discount: number;
}

export default function SearchBar() {
    const { setVisibilityOfSearchBar, visibility } = useContext(HeaderContext);
    const [search, setSearch] = useState<string>("");
    const [containerVisibility, setContainerVisibility] = useState<boolean>(false);

    //post is just for controlling the request in the useEffect
    const { response: products, loading, error, post, clear } = usePost({
        url: '/api/search' + '?search=' + search,
        body: { search }
    });

    //Setting a timer to avoid too many requests to the server, if the user
    //keeps typing, the timer is reseted.
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const buffer = e.target.value;

        setTimeout(() => {
            if(buffer === e.target.value){
                setSearch(e.target.value);
            }
        }, 1000);
    }

    useEffect(() => {
        if(search.length > 3){
            setContainerVisibility(true);
            console.log('pesquisando por'+ ' ' + search);
            post();
        }
        if(search.length < 3){
            setContainerVisibility(false);
            clear();
        }
    }, [search])

    if(visibility){
        return (
            <div className="flex justify-center">
                <BluryBackground setVisibility={setVisibilityOfSearchBar}/>
                <input
                    type="text"
                    placeholder="Digite o nome de um produto."
                    className="md:w-96 w-[80%] h-12 z-50 bg-white rounded-md p-3 fixed top-10
                    border border-gray-300 shadow-sm"
                    onChange={handleChange}
                />
                {containerVisibility &&
                    <div className="z-50 bg-white rounded-md border border-gray-300 shadow-sm 
                    fixed top-[25%] w-[90%] h-[450px] p-4 flex items-center justify-center">
                        {loading &&
                            <LoadingBlack />
                        }
                        {products &&
                            <div className="w-full h-full flex flex-col justify-between">
                                <p> Pesquisando por {' '} <span className="font-bold text-lg"> {search} </span> </p>
                                <div
                                    className="flex gap-2 w-full justify-start
                                    overflow-x-auto overflow-y-hidden"
                                    onClick={()=>setVisibilityOfSearchBar(false)}
                                >
                                    {
                                        products.data.map((product: Product)=>{
                                            return(
                                                    <div
                                                        key={product.id}
                                                    >
                                                        <Product
                                                            id={product.id}
                                                            title={product.title}
                                                            price={product.price}
                                                            images={product.images}
                                                            discount={product.discount}
                                                        />
                                                    </div>
                                            )
                                        })
                                    }
                                </div>
                                <Link 
                                    href={'/products?search=' + search}
                                    onClick={()=>setVisibilityOfSearchBar(false)}
                                >
                                    <p className="text-center text-blue-400 underline">
                                         Ver todos os resultados 
                                    </p>
                                </Link>
                            </div>
                        }
                        {error &&
                            <p className="text-center text-red-400">
                                Nenhum produto encontrado.
                            </p>
                        }
                    </div>
                }
            </div>
        )
    }
}
