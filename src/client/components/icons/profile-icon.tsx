import Icon from "./icon"
import Link from "next/link";

type Props = {
}

export default function ProfileIcon() {

    return (
        <Link href='/profile'>
           <Icon src="/profile.svg" alt="Icone de perfil" size="sm"/>
        </Link>
    )
}