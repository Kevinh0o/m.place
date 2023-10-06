'use client';
import Button from "@/client/components/input/button";
import ColorSelector from "@/client/components/product/color-selector";
import Comments from "@/client/components/product/comments";
import Description from "@/client/components/product/description";
import ImageSelector from "@/client/components/product/image-selector";
import Selector from "@/client/components/product/selector";
import useFetch from "@/client/hooks/useFetch";
import useLocalStorage from "@/client/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

type Props = {
    params: {
        id: string
    };
}

type Product = {
    id: string;
    title: string;
    description: string;
}

export default function ProductPage({ params }: Props) {
    const router = useRouter();
    const req = {
        url: '/api/product/' + params.id,
        cache: 'product-' + params.id
    };

    const { data: product, isFetching } = useFetch<Product>(req);

    const { push } = useLocalStorage('cart');

    function handleClick(){
        if(product){
            push(product.id);
            router.push('/cart');
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="h-screen max-w-screen-xl pt-16">
                <div className="flex flex-col md:flex-row w-full h-full p-2 gap-1">
                    <div className="bg-white border border-gray-300 rounded-md h-full md:w-[75%] w-full">
                        <h1 className="text-lg p-2">
                            Iphone todos
                        </h1>
                        <ImageSelector/>
                    </div>
                    <div className="bg-white border border-gray-300 rounded-md h-full md:w-[25%] w-full p-2
                    flex flex-col justify-between">
                        <div className="flex flex-col gap-4">
                            <ColorSelector type="Cor" options={["red", "blue"]}/>
                            <Selector type="Modelo" options={["128gb", "256gb", "512gb"]}/>
                        </div>
                        <div className="">
                            <div className="line-through text-sm text-gray-400">
                                <span>
                                    R$
                                </span>
                                <span>
                                    1000,00
                                </span>
                            </div>
                            <div className="text-xl font-bold">
                                <span>
                                    R$
                                </span>
                                <span className="text-xl font-bold">
                                    100,00
                                </span>
                            </div>
                            <div className="text-sm">
                                <span>
                                    Em até 12x de R$
                                </span>
                                <span className="">
                                    100,00
                                </span>
                            </div>
                            <Button type="submit" enabled={true} onClick={handleClick}>
                                Adicionar ao carrinho
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-full">
                <div className="p-2">
                    <div className="bg-white border border-gray-300 rounded-md">
                        <Description description={product?.description} />
                    </div>
                </div>
                <div className="p-2">
                    <div className="bg-white border border-gray-300 rounded-md">
                        <Comments productId={params.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}