import Link from "next/link";

type Props = {
    setVisibility: any;
}

export default function BluryBackground({ setVisibility }: Props) {

    return (
        <div
            onClick={()=>setVisibility(false)}
            className="w-screen h-screen fixed backdrop-blur-lg z-20">
        </div>
    )
}
