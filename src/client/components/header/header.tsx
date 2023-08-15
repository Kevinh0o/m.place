'use client';
import { useContext, useState } from "react";
import Icon from "../icons/icon";
import Logo from "../icons/logo";
import Container from "./container";
import DropDown from "./drop-down";
import Item from "./items";
import DropDownItem from "./drop-down-item";
import { HeaderContext } from "@/client/contexts/header-context";
import SearchIcon from "../icons/search";

export default function Header() {
    const [ isVisible, setVisibility ] = useState(false);
    const { setVisibilityOfSearchBar } = useContext(HeaderContext);
    
    return (
        <header className="w-screen h-18 fixed p-2 flex items-center justify-center flex-col
        z-10"
        onMouseLeave={()=>setVisibility(false)}
        >
            <Container>
                <Logo />
                <Item href="/" setVisibility={setVisibility}>
                    Produtos
                </Item>
                <Item href="/" setVisibility={setVisibility}>
                    Produtos
                </Item>
                <SearchIcon click={setVisibilityOfSearchBar}/>
                <Icon src="./shopping-bag.svg" alt="Icone de carrinho" size="sm"/>
                <Icon src="./profile.svg" alt="Icone de perfil" size="sm"/>
            </Container>
            <DropDown isVisible={isVisible}>
                <DropDownItem image="" title="Smartphones"/>
                <DropDownItem image="" title="Smartphones"/>
                <DropDownItem image="" title="Smartphones"/>
                <DropDownItem image="" title="Smartphones"/>
                <DropDownItem image="" title="Smartphones"/>
            </DropDown>
        </header>
    )
}
