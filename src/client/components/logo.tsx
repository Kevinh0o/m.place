import Link from "next/link"

type Props = {
}

export default function Logo() {

    return (
        <Link href='/'>
            <h1 className="text-xl font-bold text-center w-1/3">
                m.
            </h1>
        </Link>
    )
}