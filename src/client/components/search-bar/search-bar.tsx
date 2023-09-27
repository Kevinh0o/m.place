'use client';
import { useContext, useEffect, useState } from "react";
import BluryBackground from "./blury-background";
import { HeaderContext } from "@/client/contexts/header-context";
import Product from "../store/product";
import usePost from "@/client/hooks/usePost";
import LoadingBlack from "../icons/loading-animation-black";

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

    //post is just for controlling the request in the useEffect
    const { response: products, loading, error, post } = usePost({
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
        }, 2000);
    }

    useEffect(() => {
        if(search.length > 3){
            console.log('pesquisando por'+ ' ' + search)
            post();
        }
    }, [search])

    if(visibility){
        return (
            <div className="flex justify-center">
                <BluryBackground setVisibility={setVisibilityOfSearchBar}/>
                <input
                    type="text"
                    placeholder="Digite o nome de um produto."
                    className="md:w-96 w-[80%] h-12 z-50 bg-white rounded-md p-3 fixed bottom-3/4 
                    border border-gray-300 shadow-sm"
                    onChange={handleChange}
                />
                {loading &&
                    <div className="z-50 bg-white rounded-md border border-gray-300 shadow-sm 
                    fixed bottom-1/4 w-[90%] h-[300px] p-2 flex items-center justify-center">
                        <LoadingBlack />
                    </div>
                }
                {products &&
                    <div className="z-50 bg-white rounded-md border border-gray-300 shadow-sm 
                    fixed bottom-1/4 w-[90%] h-[400px] p-2 flex items-start flex-col justify-between">
                        <p> Pesquisando por {' '} <span className="font-bold text-lg"> {search} </span> </p>
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
                        <p className="text-blue-400 font-underline">
                            ver todos os produtos correspondentes
                        </p>
                    </div>
                }
                {error &&
                    <div className="z-50 bg-white rounded-md border border-gray-300 shadow-sm 
                    fixed bottom-1/4 w-[90%] h-[300px] p-2 flex items-center justify-center">
                        <p className="text-center text-red-400">
                            Nenhum produto não nao encontrado.
                        </p>
                    </div>
                }
            </div>
        )
    }
}
