import Image from "next/image"
import Link from "next/link"

type Props = {
}

export default function Product() {

    return (
        <Link
            href="/products"
            className="w-[230px] h-[265px] bg-white rounded-md flex flex-col justify-between
            p-1"
        >
            <Image
                src="/product-placeholder.png"
                alt="Picture of the author"
                width={230} 
                height={200} 
                className="w-full h-[150px] rounded-md object-scale-down"
            />
            <h1 className="text-sm font-semibold text-gray-700 px-2">
                Iphone 14 Pro Max Iphone 14 Pro Max Iph 180gb
            </h1>
            <div>
                <div className="text-xs text-gray-600 px-2 flex line-through">
                    <p> R$ </p>
                    <p> 1.000,00 </p>
                </div>
                <div className="text-md font-bold text-gray-700 px-2 flex">
                    <p> R$ </p>
                    <p> 1.000,00 </p>
                </div>
            </div>
        </Link>
    )
}