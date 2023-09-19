'use client';
import ProfileItem from "@/client/components/profile/profile-item";
import { ProfileContext } from "@/client/contexts/profile-context";
import { useContext } from "react";

type User = {
}

export default function Profile() {
    const {user} = useContext(ProfileContext);

    return(
        <div className="p-2">
            <div>
                <h1 className="text-2xl">
                    Perfil
                </h1>
            </div>
            <div className="p-5">
                <h2 className="text-lg">
                    Informações básicas
                </h2>
                <div className="flex flex-col gap-2">
                    <ProfileItem title="Id" item={user?.id}/>
                    <ProfileItem title="Nome de usuário" item={user?.username}/>
                    <ProfileItem title="Tipo de usuário" item={user?.type}/>
                </div>
            </div>
        </div>
    )
}