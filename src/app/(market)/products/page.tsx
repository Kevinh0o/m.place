'use client';
import FilterSelector from "@/client/components/store/filter-selector";
import Pagination from "@/client/components/store/pagination";
import Product from "@/client/components/store/product";
import ProductLoading from "@/client/components/store/product-loading";
import { FilterContext } from "@/client/contexts/product-filter";
import useFetch from "@/client/hooks/useFetch";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

type Product = {
    id: string;
    title: string;
    price: number;
    discount: number;
    images: string[];
}

export default function Products() {
    const searchParams = useSearchParams();
    //Get params of the url
    const search = searchParams?.get('search');
    const minPrice = searchParams?.get('minPrice');
    const maxPrice = searchParams?.get('maxPrice');
    const brand = searchParams?.get('brand');
    const sortby = searchParams?.get('sortby');
    const page = searchParams?.get('page');

    const req = {
        url: '/api/product?' + 
            'search=' + search +
            '&minPrice=' + minPrice +
            '&maxPrice=' + maxPrice + 
            '&brand=' + brand +
            '&sortby=' + sortby +
            '&page=' + page,
        cache: 'product-' + maxPrice + minPrice + sortby + brand + search + page,
    };

    const { data: products, isFetching } = useFetch<Product[]>(req);

    return (
        <div className="min-h-screen pt-12 bg-gray-200 flex flex-col justify-between 
        items-center">
            <div className="h-full max-w-screen-xl p-5
            flex justify-between items-start gap-2">
                <FilterSelector/>
                <div className="w-full rounded-lg gap-2 flex flex-wrap">
                    {isFetching ? 
                        <>
                            <ProductLoading/>
                            <ProductLoading/>
                            <ProductLoading/>
                        </> :
                        products?.map((product)=>{
                            return(
                                <Product 
                                    key={product.id}
                                    title={product.title}
                                    id={product.id}
                                    price={product.price}
                                    discount={product.discount}
                                    images={product.images}
                                />
                            )
                        })
                    }               
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                {products && 
                <Pagination numberOfProducts={products.length}/>
                }
            </div>
        </div>
    )
}