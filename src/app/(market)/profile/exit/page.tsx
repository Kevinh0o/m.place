'use client';
import { ProfileContext } from "@/client/contexts/profile-context";
import useLocalStorage from "@/client/hooks/useLocalStorage";
import { useContext, useState } from "react";

export default function ProfileOrders() {
    const { clear } = useLocalStorage('token');
    const { setUser } = useContext(ProfileContext);

    useState(()=>{
        clear();
        setUser(undefined);
    })

    return(
        <div className="p-4 font-bold">
            Saindo...
        </div>
    )
}