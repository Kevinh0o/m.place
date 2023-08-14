'use client';

import Image from "next/image";
import Link from "next/link";

type Props = {
    image: string;
    title: string;
}

export default function DropDownItem({ image, title }: Props) {
    return (
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-4 rounded-xl
        flex">
            <div className="bg-gray-300 w-10 h-10 rounded-md mr-2">
                <Image
                    src={image}
                    width={10}
                    height={10}
                    alt="Ilustração"
                />
            </div>
            <div className=" text-sm font-bold">
                {title}
            </div>
        </div>
    )
}
