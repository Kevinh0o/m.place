'use client';
import { useContext, useEffect, useState } from "react";
import Button from "../input/button"
import { useRouter } from "next/navigation";
import { FilterContext } from "@/client/contexts/product-filter";
import { useSearchParams } from 'next/navigation'

type Props = {
}

export default function FilterSelector() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const maxPriceQuery = searchParams?.get('maxPrice') || 1;
    const minPriceQuery = searchParams?.get('minPrice') || 0;
    const sortbyQuery = searchParams?.get('sortby') || 'desc';
    const brandQuery = searchParams?.get('brand') || '';
    const searchQuery = searchParams?.get('search') || '';

    const {
        maxPrice,
        minPrice,
        setMaxPrice,
        setMinPrice,
        sortby,
        setOrder,
        brand,
        setBrand,
        search,
        setSearch,
        page
    } = useContext(FilterContext);

    useEffect(() => {
        setMaxPrice(maxPriceQuery);
        setMinPrice(minPriceQuery);
        setOrder(sortbyQuery);
        setBrand(brandQuery);
        setSearch(searchQuery);
    },[searchParams]);

    const params =
        '/products?' + 
        'maxPrice=' + maxPrice + 
        '&minPrice=' + minPrice + 
        '&sortby=' + sortby + 
        '&brand=' + brand +
        '&search=' + search + 
        '&page=' + page

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        router.push(params);
    }

    return (
        <form className="w-[350px] bg-white rounded-md p-4 flex flex-col gap-4
        border border-gray-300 shadow-sm"
        onSubmit={handleSubmit}>
            <div>
                {search != '' ?
                    <div className="mb-2">
                        <p className="text-sm"> Procurando por: </p>
                        <div>
                            <p className="font-semibold"> {search} </p>
                        </div>
                    </div>
                    :
                    <>
                    </>
                }
                <p> Ordem: </p>
                <div className="border border-gray-300 rounded-sm flex p-1 
                justify-around shadow-sm">
                    <div className="h-full w-1/2 flex">
                        <input 
                            id="cres"
                            checked={sortby == 'asc'}
                            onChange={() => setOrder('asc')}
                            name="order" 
                            type="radio"
                            className="peer w-0 h-0"
                        />
                        <label htmlFor="cres" className="h-full w-full peer-checked:font-semibold
                        cursor-pointer flex justify-center items center border-r"> 
                            Crescente 
                        </label>
                    </div>

                    <div className="h-full w-1/2 flex">
                        <input 
                            id="desc"
                            checked={sortby == 'desc'}
                            onChange={() => setOrder('desc')}
                            name="order" 
                            type="radio" 
                            className="peer w-0 h-0"
                        />
                        <label htmlFor="desc" className="h-full w-full peer-checked:font-semibold
                        cursor-pointer flex justify-center items center border-l">
                            Descresente 
                        </label>
                    </div>
                </div>
            </div>           
            <div>
                <p> Preço: </p>
                <div>
                    <label className="w-full text-sm"> Max: R$ {maxPrice} </label>
                    <input type="range"
                        onChange={(e)=>setMaxPrice(parseInt(e.target.value))}
                        defaultValue={maxPrice}
                        max={10000}
                        min={minPrice}
                        className="border rounded-md w-full p-1 px-2 text-sm">
                    </input>
                </div>
                <div>
                    <label className="w-full text-sm"> Min: R$ {minPrice} </label>
                    <input type="range"
                        onChange={(e)=>setMinPrice(parseInt(e.target.value))}
                        defaultValue={minPrice}
                        max={maxPrice}
                        min={0}
                        className="border rounded-md w-full p-1 px-2 text-sm">
                    </input>
                </div>
            </div>
            <div>
                <p> Marca: </p>
                <div>
                    <input 
                        type="radio"
                        checked={brand == 'Apple'}
                        onChange={() => setBrand('Apple')}
                        name="brand"
                        id="Apple"
                        className="border rounded-md"/>
                    <label htmlFor="Apple"> Apple </label>
                </div>
                <div>
                    <input 
                        type="radio"
                        checked={brand == 'Samsung'}
                        onChange={() => setBrand('Samsung')}
                        name="brand"
                        id="Samsung"
                        className="border rounded-md"/>
                    <label htmlFor="Samsumg"> Samsung </label>
                </div>
            </div>
            <div>
                <Button type="submit" enabled={true}>
                    Aplicar filtro
                </Button>
            </div>
        </form>
    )
}