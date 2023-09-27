'use client';

type Props = {
    children: React.ReactNode;
    setVisibility: any;
}

export default function Item({ setVisibility, children }: Props) {

    return (
        <nav className="m-2 h-full">
            <p className="cursor-pointer text-sm text-bold h-full"
            onMouseEnter={()=>setVisibility(true)}
            >
                {children}
            </p>
        </nav>
    )
}
