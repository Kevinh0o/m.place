'use client';

import { ProfileContext } from "@/client/contexts/profile-context";
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
        setPageNumber
    } = useContext(ProfileContext);

    useEffect(()=>{
        setPageNumber(pageQuery);
    }, [searchParams])

    //Create an array with the number of pages divided by 12 (each page has 12 products)
    const numberOfPages = Math.ceil(numberOfProducts / 6);

    const totalPages = new Array(numberOfPages)
        .fill(0)
        .map((page: number, index)=>{
            page = index + 1;
            return(
                page
            )
        })

    function handleSubmit(page: number) {
        setPageNumber(page);

        router.push(
            '/profile/comments?' +
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