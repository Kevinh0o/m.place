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
    logOut: ()=>void;
}

export const AuthContext = createContext<ContextProps>({
    user: [],
    logOut: ()=>{}
});

export default function AuthContextProvider({ children }: Props){
    const [user, setUser] = useState<string[]>();

    const { data: token, updateData, clear } = useLocalStorage('token');

    const path = usePathname();
    const router = useRouter();

    useEffect(()=>{
        if(token){
            setUser(token);
            //routes that auth users shouldnt need // convenient redirects
            if(( path == '/register' || path == '/login' ) && token.length > 0){
                router.replace('/profile')
            }
        }

        //Case that token is empty, key starts empty == [], and then goes to undefined when actually
        //doent find the user
        if(token?.length == 0){
        }
        
        //Case that token is undefined
        //Garants that the user is logged out when the token is removed
        if(!token){
            setUser(undefined);

            if(path?.includes('/profile')){
                router.replace('/login');
            }
        }

        //sets the token in the axios header for private data fetching
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
    }, [token, path, router, user])

    const logOut = () => {
        setUser(undefined);
        clear();
        router.push('/')
    }

    return(
        <AuthContext.Provider value={{
            user,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}