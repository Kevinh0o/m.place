'use client';

import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href: string;
    setVisibility: any;
}

export default function Item({ href, setVisibility, children }: Props) {

    return (
        <nav className="m-2">
            <Link href={href}>
                <p className="cursor-pointer text-sm text-bold"
                onMouseEnter={()=>setVisibility(true)}>
                    {children}
                </p>
            </Link>
        </nav>
    )
}
