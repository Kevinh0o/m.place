'use client';

import Image from "next/image";
import { useState } from "react";

export default function ImageSelector() {

    const array = [
        '/iphone14-image.jpeg',
        '/galaxyfold-image.avif',
        '/iphone14-image.jpeg',
        '/macbook-image.jpg'
    ];

    const [selected, setSelected] = useState(array[0]);

    return (
        <div className="h-full p-5 flex flex-col justify-start items-center">
            <div className="h-3/4 w-full">
                <Image 
                    src={selected}
                    alt="iphone"
                    width={1440} 
                    height={640}
                    className="h-full object-cover overflow-hidden rounded-md border
                    border-gray-300"
                />
            </div>

            <div className="h-1/4 flex gap-2">
                {array.map((e)=>{
                    return(
                        <div 
                            key={e} 
                            className="md:w-[100px] md:h-[100px] h-[50px] w-[50px] border rounded-lg border-1 cursor-pointer"
                            onClick={()=>setSelected(e)}
                        >
                            <Image
                                src={e}
                                alt="iphone"
                                width={500} 
                                height={500}
                                className="h-full object-cover overflow-hidden rounded-lg border-1"
                            />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}