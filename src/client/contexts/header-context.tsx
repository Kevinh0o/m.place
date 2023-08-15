'use client';
import { createContext, useState } from "react"

type Props = {
    children: React.ReactNode;
}

type ContextProps = {
    setVisibilityOfSearchBar: any;
    visibility: boolean;
}

export const HeaderContext = createContext<ContextProps>({
    setVisibilityOfSearchBar: (value: boolean) => {},
    visibility: false
});

export default function HeaderContextProvider({ children }: Props){
    const [visibility, setVisibilityOfSearchBar] = useState(false);

    return(
        <HeaderContext.Provider value={{
            setVisibilityOfSearchBar,
            visibility
        }}>
            {children}
        </HeaderContext.Provider>
    )
}