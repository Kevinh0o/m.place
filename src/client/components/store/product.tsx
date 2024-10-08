import Image from "next/image"
import Link from "next/link"

type Props = {
    title: string;
    id: string;
    price: number;
    discount: number;
    images: string[];
}

export default function Product({ title, id, price, discount, images }: Props) {

    return (
        <Link
            href={'/products/' + id}
            className="w-[230px] h-[265px] bg-white rounded-md flex flex-col justify-between
            p-1 border border-gray-300 shadow-sm"
        >
            <Image
                src={images[0] + '.jpg'}
                alt={'Imagem do produto ' + title}
                width={230} 
                height={200}
                className="w-full h-[150px] rounded-md object-scale-down"
            />
            <h1 className="text-sm font-semibold text-gray-700 px-2">
                {title}
            </h1>
            <div>
                <div className="text-xs text-gray-600 px-2 line-through">
                    {discount > 0 &&
                        <>
                            <span> R$ </span>
                            <span> {price} </span>
                        </>
                    }
                </div>
                <div className="text-md font-bold text-gray-700 px-2 flex">
                    <p> R$ </p>
                    <p> {price - discount} </p>
                </div>
            </div>
        </Link>
    )
}