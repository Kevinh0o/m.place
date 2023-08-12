'use client';
import { createContext, useState } from "react"

type Props = {
    children: React.ReactNode;
}

type ContextProps = {
    setCategory: any
    category: 'store' | 'smartphone' | undefined;
    dropDownVisibility: boolean;
    setVisibilityOfDropdown: any;
}

export const HeaderContext = createContext<ContextProps>({
    setVisibilityOfDropdown: (value: boolean) => {},
    setCategory: (value: string) => {},
    dropDownVisibility: false,
    category: undefined
});

export default function HeaderContextProvider({ children }: Props){
    const [dropDownVisibility, setVisibilityOfDropdown] = useState(false);
    const [category, setCategory] = useState(undefined);

    return(
        <HeaderContext.Provider value={{
            setVisibilityOfDropdown,
            dropDownVisibility,
            setCategory,
            category
        }}>
            {children}
        </HeaderContext.Provider>
    )
}