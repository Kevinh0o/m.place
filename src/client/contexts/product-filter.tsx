'use client';
import { createContext, useState } from "react"

type Props = {
    children: React.ReactNode;
}

type ContextProps = {
    sortby: 'desc' | 'asc';
    setOrder: any;
    minPrice: number | undefined;
    setMinPrice: any;
    maxPrice: number | undefined;
    setMaxPrice: any;
    brand: string;
    setBrand: any;
    search: string;
    setSearch: any;
}

export const FilterContext = createContext<ContextProps>({
    sortby: 'desc',
    setOrder: (value: 'desc' | 'asc') => {},
    minPrice: 0,
    setMinPrice: (value: number | undefined) => {},
    maxPrice: 1,
    setMaxPrice: (value: number | undefined) => {},
    brand: '',
    setBrand: (value: string) => {},
    search: '',
    setSearch: (value: string) => {},
});

export default function FilterContextProvider({ children }: Props){
    const [sortby, setOrder] = useState<'desc' | 'asc'>('desc');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1);
    const [brand, setBrand] = useState('');
    const [search, setSearch] = useState('');

    return(
        <FilterContext.Provider value={{
            sortby,
            setOrder,
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice,
            brand,
            setBrand,
            search,
            setSearch
        }}>
            {children}
        </FilterContext.Provider>
    )
}