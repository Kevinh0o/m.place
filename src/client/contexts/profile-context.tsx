'use client';
import { User } from "@prisma/client";
import { createContext, useState } from "react"

type Props = {
    children: React.ReactNode;
}

type ContextProps = {
    user: User | undefined;
    page: string;
}

export const ProfileContext = createContext<ContextProps>({
    user: undefined,
    page: 'profile'
});

export default function ProfileContextProvider({ children }: Props){
    const [user, setUser] = useState<User | undefined>();
    const [page, setPage] = useState<string>('profile');

    return(
        <ProfileContext.Provider value={{
            user,
            page
        }}>
            {children}
        </ProfileContext.Provider>
    )
}