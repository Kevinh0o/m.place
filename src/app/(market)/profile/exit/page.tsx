'use client';
import { AuthContext } from "@/client/contexts/auth-context";
import { ProfileContext } from "@/client/contexts/profile-context";
import { useContext, useEffect, useState } from "react";

export default function ProfileOrders() {
    const { logOut } = useContext(AuthContext);
    const { setUser } = useContext(ProfileContext);

    useEffect(()=>{
        logOut();
        setUser(undefined);
    }, [])

    return(
        <div className="p-4 font-bold">
            Saindo...
        </div>
    )
}