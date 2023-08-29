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
    page: number;
    setPage: any;
}

export const FilterContext = createContext<ContextProps>({
    sortby: 'desc',
    setOrder: (value: 'desc' | 'asc') => {},
    minPrice: 0,
    setMinPrice: (value: number | undefined) => {},
    maxPrice: 10000,
    setMaxPrice: (value: number | undefined) => {},
    brand: '',
    setBrand: (value: string) => {},
    search: '',
    setSearch: (value: string) => {},
    page: 1,
    setPage: (value: number) => {}
});

export default function FilterContextProvider({ children }: Props){
    const [sortby, setOrder] = useState<'desc' | 'asc'>('desc');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1);
    const [brand, setBrand] = useState('');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

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
            setSearch,
            page,
            setPage
        }}>
            {children}
        </FilterContext.Provider>
    )
}