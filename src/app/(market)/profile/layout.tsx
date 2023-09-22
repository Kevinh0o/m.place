'use client';
import Navigation from "@/client/components/profile/navigation";
import { AuthContext } from "@/client/contexts/auth-context";
import { ProfileContext } from "@/client/contexts/profile-context";
import useFetch from "@/client/hooks/useFetch";
import { useContext, useEffect } from "react";

type Props = {
    children: React.ReactNode;
}

type User = {}

export default function ProfileLayout({ children}: Props) {
    const {user: token} = useContext(AuthContext);
    const {setUser} = useContext(ProfileContext);

    const {data: user, error, isFetching} = useFetch<User>({
        url: '/api/', //api/user
        cache: 'user'
    });

    useEffect(()=>{
        if(user){
            setUser(user);
        }
    }, [user])

    //layout fetch user data and pass it to the children pages X
    //profile => /comments /update /dashboard /orders /logout
    //dashboard => /comments /orders /total sales, etc

    return(
        <div className="min-h-screen w-full pt-16 flex">
            <div className="flex justify-center">
                <Navigation />
            </div>
            <div className="w-3/4 p-5">
                <div className="w-full h-full bg-white border border-gray-300 rounded-md">
                    {children}
                </div>
            </div>
        </div>
    )
}