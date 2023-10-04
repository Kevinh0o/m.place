'use client';
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

type Props = {
    children: React.ReactNode;
}

type ContextProps = {
    user: string[] | undefined;
}

export const AuthContext = createContext<ContextProps>({
    user: []
});

export default function AuthContextProvider({ children }: Props){
    const [user, setUser] = useState<string[]>();

    const { data: token, remove } = useLocalStorage('token');

    const path = usePathname();
    const router = useRouter();

    useEffect(()=>{
        if(token){
            console.log('token', token)
            setUser(token);
            //routes that auth users shouldnt need
            if(( path == '/register' || path == '/login' ) && token.length > 0){
                router.push('/')
            }
        
            //protected routes > NEED authentication
            if(path == '/profile' && token.length <= 0){
                router.push('/')
            }
        }

        //Garants that the user is logged out when the token is removed
        if(!token && path == '/profile'){
            router.push('/')
        }

        //sets the token in the axios header for private data fetching
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
    }, [token, path, router])

    return(
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}