'use client';
import LoadingBlack from "@/client/components/icons/loading-animation-black";
import ButtonDropDown from "@/client/components/mobile/buttons/drop-down-button";
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

    const {data: user, error, isFetching, refetch} = useFetch<User>({
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
        <div className="h-screen w-full pt-16 md:flex">
            <div className="flex px-5">
                <ButtonDropDown>
                    <Navigation />
                </ButtonDropDown>
                <div className="md:block hidden">
                    <Navigation />
                </div>
            </div>
            <div className="p-5 h-full w-full">
                <div className="w-full h-full bg-white border border-gray-300 
                rounded-md">
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