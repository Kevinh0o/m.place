'use client';
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
    children: React.ReactNode;
}

type ContextProps = {
    user: string[];
}

export const AuthContext = createContext<ContextProps>({
    user: []
});

export default function AuthContextProvider({ children }: Props){
    const { data: user, remove } = useLocalStorage('token');
    const path = usePathname();
    const router = useRouter();

    //routes that auth users shouldnt need
    if(
        path == '/register' ||
        path == '/login'
        && user.length >= 1
    ){
        router.push('/')
    }

    //protected routes > NEED authentication
    if(
        path == '/user'
        && user.length == 0
    ){
        router.push('/login')
    }

    return(
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}