import Link from "next/link";

type Props = {
    totalPrice: number;
    status: string;
    createdAt: Date;
    orderId: string;
}

export default function Order({ totalPrice, status, createdAt, orderId }: Props) {

    return (
        <div className="border border-gray-300 rounded-md bg-white w-full h-[150px] flex p-2 justify-between">

            <div className="">
                <h1 className="font-semibold">
                    ID DO PEDIDO
                </h1>
                <div>
                    <span className="text-sm">
                        {orderId}
                    </span>
                </div>
            </div>

            <div className="">
                <h1 className="font-semibold">
                    STATUS
                </h1>
                <div>
                    <span className="text-sm">
                        {status}
                    </span>
                </div>
            </div>

            <div className="">
                <h1 className="font-semibold">
                    DATA
                </h1>
                <div>
                    <span className="text-sm">
                        {String(createdAt).split('T')[0]}
                    </span>
                </div>
            </div>

            <div className="">
                <h1 className="font-semibold">
                    PREÇO TOTAL
                </h1>
                <div>
                    <span className="text-sm">
                        R$
                    </span>
                    <span className="text-sm">
                        {totalPrice}
                    </span>
                </div>
            </div>

            <div className="text-sm text-blue-500">
                <Link className="font-semibold underline" href={'/profile/orders/' + orderId}>
                    Ver pedido
                </Link>
            </div>

        </div>
    )
}