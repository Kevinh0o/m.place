'use client';

import Link from "next/link";
import Icon from "../icons/icon";

type Props = {
    alt: string;
    src: string;
    title: string;
    href: string;
    setVisibility: (i:boolean)=>void;
}

export default function DropDownItem({ src, alt, title, href, setVisibility }: Props) {
    return (
        <Link href={href} onClick={()=>setVisibility(false)}>
            <div className="hover:bg-gray-100 cursor-pointer p-4 rounded-md
            flex border border-gray-300 shadow-sm">
                <div className="border w-15 h-15 p-1 border-gray-300 rounded-md mr-2 flex
                items-center justify center shadow-sm">
                    <Icon
                        src={src}
                        size="sm"
                        alt="Ilustração"
                    />
                </div>
                <div className=" text-sm font-bold">
                    {title}
                </div>
            </div>
        </Link>
    )
}
