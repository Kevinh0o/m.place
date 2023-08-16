'use client';
import { useContext, useState } from "react";
import BluryBackground from "./blury-background";
import { HeaderContext } from "@/client/contexts/header-context";

export default function SearchBar() {
    const { setVisibilityOfSearchBar, visibility } = useContext(HeaderContext);

    if(visibility){
        return (
            <div className="flex justify-center">
                <BluryBackground setVisibility={setVisibilityOfSearchBar}/>
                <input
                type="text"
                placeholder="Digite o nome de um produto."
                className="w-96 h-12 z-50 bg-white rounded-md p-3 fixed top-1/4 border"/>
            </div>
        )
    }
}
