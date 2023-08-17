'use client';
import useFetch from "@/client/hooks/useFetch";

type Props = {
    params: {
        id: string
    };
}

type Product = {
    title: string;
}

export default function ProductPage({ params }: Props) {
    const req = {
        url: '/api/product/' + params.id,
        cache: 'product-' + params.id
    };

    const { data: product, isFetching } = useFetch<Product>(req);

    return (
        <div className="h-screen 2-screen bg-gray-200">
            {product && product.title}
        </div>
    )
}