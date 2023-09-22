'use client';
import { createContext, useState } from "react"

type Props = {
    children: React.ReactNode;
}

type ContextProps = {
    user: User | undefined;
    setUser: any;
    page: string;
    pageNumber: number;
    setPageNumber: any;
}

type User = {
    id: string;
    username: string;
    type: string;
    comments: [Comment];
    orders: [Order];
}

type Comment = {
    userId: string;
    content: string;
    createdAt: Date;
    productId: string;
}

type Order = {
    
}

export const ProfileContext = createContext<ContextProps>({
    user: undefined,
    setUser: () => {},
    page: 'profile',
    pageNumber: 1,
    setPageNumber: () => {},
});

export default function ProfileContextProvider({ children }: Props){
    const [user, setUser] = useState<User | undefined>();
    const [page, setPage] = useState<string>('profile');
    const [pageNumber, setPageNumber] = useState<number>(1);

    return(
        <ProfileContext.Provider value={{
            user,
            setUser,
            page,
            pageNumber,
            setPageNumber
        }}>
            {children}
        </ProfileContext.Provider>
    )
}