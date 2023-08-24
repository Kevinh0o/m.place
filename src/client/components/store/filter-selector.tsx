'use client';
import { useEffect, useState } from "react";
import Button from "../input/button"
import { useRouter } from "next/navigation";

type Props = {
}

export default function FilterSelector() {
    const [maxPrice, setMaxPrice] = useState<number>(1000);
    const [minPrice, setMinPrice] = useState<number>(1);
    const router = useRouter();

    const maxPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(parseInt(e.target.value));
    }

    const minPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(parseInt(e.target.value));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push('/products?search=&minPrice=0&maxPrice=10000&brand=&sortby=desc&page=1');
    }

    return (
        <form className="w-[350px] bg-white rounded-lg p-4 flex flex-col gap-4"
        onSubmit={handleSubmit}>
            <div>
                <p> Ordem: </p>
                <div className="border rounded-md flex p-1 justify-around">
                    <div className="h-full w-1/2 flex">
                        <input id="cres" name="order" type="radio" className="peer w-0 h-0"/>
                        <label htmlFor="cres" className="h-full w-full peer-checked:font-semibold
                        cursor-pointer flex justify-center items center border-r"> 
                            Crescente 
                        </label>
                    </div>

                    <div className="h-full w-1/2 flex">
                        <input id="desc" name="order" type="radio" className="peer w-0 h-0"/>
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
                        onChange={maxPriceHandler}
                        defaultValue={maxPrice}
                        max={10000}
                        min={minPrice}
                        className="border rounded-md w-full p-1 px-2 text-sm">
                    </input>
                </div>
                <div>
                    <label className="w-full text-sm"> Min: R$ {minPrice} </label>
                    <input type="range"
                        onChange={minPriceHandler}
                        defaultValue={minPrice}
                        maxLength={1000000}
                        max={maxPrice}
                        min={0}
                        className="border rounded-md w-full p-1 px-2 text-sm">
                    </input>
                </div>
            </div>
            <div>
                <p> Marca: </p>
                <div>
                    <input type="radio" name="brand" id="apple" className="border rounded-md"/>
                    <label htmlFor="apple"> Apple </label>
                </div>
                <div>
                    <input type="radio" name="brand" id="samsung" className="border rounded-md"/>
                    <label htmlFor="samsung"> Samsumg </label>
                </div>
            </div>
            <div>
                <Button type="submit">
                    Aplicar filtro
                </Button>
            </div>
        </form>
    )
}
