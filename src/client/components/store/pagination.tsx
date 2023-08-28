'use client';

import { FilterContext } from "@/client/contexts/product-filter";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

type Props = {
}

export default function Pagination() {
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

    const totalPages = new Array(10)
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
        <div className="flex gap-4 p-5">
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