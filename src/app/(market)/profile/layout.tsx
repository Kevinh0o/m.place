'use client';
import LoadingBlack from "@/client/components/icons/loading-animation-black";
import Navigation from "@/client/components/profile/navigation";
import { AuthContext } from "@/client/contexts/auth-context";
import { ProfileContext } from "@/client/contexts/profile-context";
import useFetch from "@/client/hooks/useFetch";
import { useContext, useEffect } from "react";

type Props = {
    children: React.ReactNode;
}

type User = {
    id: string;
    username: string;
    type: string;
    comments: [];
    orders: [];
}

export default function ProfileLayout({ children }: Props) {
    const {user: token} = useContext(AuthContext);

    const {setUser} = useContext(ProfileContext);

    const {data: user, error, isFetching} = useFetch<User>({
        url: '/api/user',
        cache: 'user',
        token: token
    });

    useEffect(()=>{
        if(user){
            setUser(user);
        }
    }, [isFetching, user])

    return(
        <div className="min-h-screen w-full pt-16 flex">
            <div className="flex justify-center">
                <Navigation />
            </div>
            <div className="w-3/4 p-5">
                <div className="w-full h-full bg-white border border-gray-300 rounded-md">
                    {isFetching ?
                        <LoadingBlack /> 
                        :
                        <div> 
                            {children}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}