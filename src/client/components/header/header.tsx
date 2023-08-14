'use client';
import { useState } from "react";
import Icon from "../icons/icon";
import Logo from "../icons/logo";
import Container from "./container";
import DropDown from "./drop-down";
import Item from "./items";
import DropDownItem from "./drop-down-item";

export default function Header() {
    const [ isVisible, setVisibility ] = useState(false);
    
    return (
        <header className="w-screen h-18 fixed p-2 flex items-center justify-center flex-col"
        onMouseLeave={()=>setVisibility(false)}
        >
            <Container>
                <Logo />
                <Item href="/" setVisibility={setVisibility}>
                    Produtos
                </Item>
                <Item href="/" setVisibility={setVisibility}>
                    Sobre
                </Item>
                <Icon src="./search.svg" alt="Icone de pesquisa" size="sm"/>
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
