'use client';

import Image from "next/image";
import { useState } from "react";

type Props = {
    images: string[];
}

export default function ImageSelector({ images }: Props) {

    const [selected, setSelected] = useState(images[0] + '.jpg');

    return (
        <div className="h-full p-5 flex flex-col justify-start items-center">
            <div className="h-3/4 w-full">
                <Image 
                    src={selected}
                    alt="iphone"
                    width={1440} 
                    height={640}
                    className="h-full object-contain overflow-hidden rounded-md border
                    border-gray-300"
                />
            </div>

            <div className="h-1/4 flex gap-2">
                {images.map((image)=>{
                    return(
                        <div 
                            key={image} 
                            className="md:w-[100px] md:h-[100px] h-[50px] w-[50px] border rounded-lg border-1 cursor-pointer"
                            onClick={()=>setSelected(image + '.jpg')}
                        >
                            <Image
                                src={image + '.jpg'}
                                alt="iphone"
                                width={500} 
                                height={500}
                                className="h-full object-contain overflow-hidden rounded-lg border-1"
                            />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}