'use client';

import Link from "next/link";

type Props = {
    children: React.ReactNode;
    setVisibility: any;
}

export default function Item({ setVisibility, children }: Props) {

    return (
        <nav className="m-2">
            <p className="cursor-pointer text-sm text-bold"
            onMouseEnter={()=>setVisibility(true)}
            >
                {children}
            </p>
        </nav>
    )
}
