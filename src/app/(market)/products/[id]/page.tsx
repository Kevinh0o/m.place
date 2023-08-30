'use client';
import Button from "@/client/components/input/button";
import ColorSelector from "@/client/components/product/color-selector";
import Comments from "@/client/components/product/comments";
import ImageSelector from "@/client/components/product/image-selector";
import Selector from "@/client/components/product/selector";
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
        <div>
            <div className="h-screen pt-12 bg-gray-200">
                <div className="h-full w-full flex p-5">
                    <div className="w-full">
                        <div className="h-3/4 w-full rounded-lg bg-white p-4">
                            <div className="text-2xl">
                                Iphone 14 pro max
                            </div>
                            <div className="h-[90%] flex justify-center items-center">
                                <ImageSelector />
                            </div>
                        </div>
                        <div className="h-2"/>
                        <div className="h-1/4 flex gap-2">
                            <div className="w-1/3 h-full bg-white rounded-lg">
                                <Selector options={['64gb','128gb','256gb','512gb']} type="Armazenamento"/>
                            </div>
                            <div className="w-1/3 h-full bg-white rounded-lg">
                                <ColorSelector options={['blue','red','black','gray']} type="Cores"/>
                            </div>
                            <div className="w-1/3 h-full p-3 flex flex-col justify-end items-end
                            bg-white rounded-lg">
                                <div/>
                                <div className=" text-right">
                                    <div className="flex text-gray-500 line-through text-sm">
                                        <p>R$</p>
                                        <p>10000</p>
                                    </div>
                                    <div className="flex font-semibold text-lg">
                                        <p>R$</p>
                                        <p>100000</p>
                                    </div>
                                </div>
                                <Button type="button"> Comprar </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 p-5">
                <div className="bg-white rounded-lg p-5">
                    <h1 className="text-lg font-bold">
                        Descrição do produto
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit expedita nemo sunt! Magni, autem magnam! Laudantium quibusdam harum omnis tenetur. Nesciunt veritatis quam maxime laudantium obcaecati inventore iure praesentium.
                    </p>
                </div>
            </div>
            <div className="bg-gray-200 p-5">
                <div className="bg-white rounded-lg p-5">
                    <Comments productId={params.id}/>
                </div>
            </div>
        </div>
    )
}