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
        <div className="h-full p-2 flex">
            <div className="h-full w-[90%]">
                <Image 
                    src={selected}
                    alt="iphone"
                    width={1440} 
                    height={640}
                    className="h-full object-cover overflow-hidden rounded-lg border-2"
                />
            </div>

            <div className="flex flex-wrap flex-col p-2 gap-2">
                {array.map((e)=>{
                    return(
                        <div 
                            key={e} 
                            className="w-[100px] h-[100px] border rounded-lg border-1 cursor-pointer"
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