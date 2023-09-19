'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    link: string;
    title: string;
}

export default function NavigationItem({ link, title }: Props) {
    const path = usePathname();
    const [styles, setStyles] = useState<string>('');

    useEffect(()=>{
        if(path === link){
            setStyles('font-bold text-gray-600');
        }
        else{
            setStyles('text-gray-500');
        }
    }, [path])

    return (
        <li>
            <Link href={link}>
                <p className={styles}>
                    {title}
                </p>
            </Link> 
        </li>
    )
}
