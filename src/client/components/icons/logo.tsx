import Link from "next/link"

type Props = {
}

export default function Logo() {

    return (
        <Link href='/' className="w-auto h-full flex items-center justify-center p-2">
            <h1 className="text-xl font-bold text-center">
                m.
            </h1>
        </Link>
    )
}