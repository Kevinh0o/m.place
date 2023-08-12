'use client';
import { useContext } from "react";
import { HeaderContext } from "../contexts/header-context";

export default function Navigation(){
    const { setVisibilityOfDropdown, setCategory } = useContext(HeaderContext);

    function handleMouseEnterStore(){
        setVisibilityOfDropdown(true);
        setCategory('store');
    }

    function handleMouseEnterSmart(){
        setVisibilityOfDropdown(true);
        setCategory('smarphone');
    }

    return (
        <nav className="w-1/3">
                <ul className="text-sm flex justify-around">

                    <li 
                        className="hover:cursor-pointer"
                        onMouseEnter={handleMouseEnterStore}
                    >
                        Loja
                    </li>

                    <li
                        className="hover:cursor-pointer"
                        onMouseEnter={handleMouseEnterSmart}
                    >
                        Smartphones
                    </li>
                    
                </ul>
        </nav>
    )
}
