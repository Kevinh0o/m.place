import { useContext, useEffect, useState } from "react"
import Icon from "./icon"
import Link from "next/link";
import { AuthContext } from "@/client/contexts/auth-context";

type Props = {
}

export default function ProfileIcon() {
    const { user } = useContext(AuthContext);
    const [ link, setLink ] = useState('');

    useEffect(()=>{
        if(user){
            setLink('/profile');
        }
        else{
            setLink('/login');
        }
    }, [user])
    return (
        <Link href={link}>
           <Icon src="/profile.svg" alt="Icone de perfil" size="sm"/>
        </Link>
    )
}