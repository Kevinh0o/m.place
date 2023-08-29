'use client';

import { FilterContext } from "@/client/contexts/product-filter";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

type Props = {
    numberOfProducts: number;
}

export default function Pagination({numberOfProducts}: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageQuery = searchParams?.get('page') || 1;

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
        page,
        setPage
    } = useContext(FilterContext);

    useEffect(()=>{
        setPage(pageQuery);
    }, [searchParams])

    //Create an array with the number of pages divided by 12 (each page has 12 products)
    const numberOfPages = Math.ceil(numberOfProducts / 12);

    const totalPages = new Array(numberOfPages)
        .fill(0)
        .map((page: number, index)=>{
            page = index + 1;
            return(
                page
            )
        }) 

    function handleSubmit(page: number) {
        setPage(page);

        router.push(
            '/products?' + 
            'maxPrice=' + maxPrice + 
            '&minPrice=' + minPrice + 
            '&sortby=' + sortby + 
            '&brand=' + brand +
            '&search=' + search + 
            '&page=' + page
        );
    }

    return (
        <div className="flex gap-2 p-5">
            Página
            {totalPages.map((page, index)=>{
                let style = {
                    opacity: 0.5
                }

                if(page == pageQuery){
                    style.opacity = 1;
                }

                return(
                    <button
                        key={page}
                        onClick={()=>handleSubmit(page)}
                        className="bg-purple-600 text-sm text-white rounded-md
                        h-6 w-6 flex justify-center items-center]"
                        style={style}
                    >
                        {index + 1}
                    </button>
                )
            })}
        </div>
    )
}