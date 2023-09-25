'use client';
import { useContext, useState } from "react";
import Logo from "../icons/logo";
import Container from "./container";
import DropDown from "./drop-down";
import Item from "./items";
import DropDownItem from "./drop-down-item";
import { HeaderContext } from "@/client/contexts/header-context";
import SearchIcon from "../icons/search";
import CartIcon from "../icons/cart-icon";
import Link from "next/link";
import ProfileIcon from "../icons/profile-icon";

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
                <Item setVisibility={setVisibility}>
                    Produtos
                </Item>
                <Link className="text-sm" href="/about" onClick={(prev)=>setVisibility(!prev)}>
                    Sobre
                </Link>
                <SearchIcon click={setVisibilityOfSearchBar}/>
                <CartIcon click={setVisibility}/>
                <ProfileIcon />
            </Container>
            <DropDown isVisible={isVisible}>
                <DropDownItem 
                    src="/smartphone.png"
                    title="Todos os Smartphones" 
                    href="/products"
                    alt="Icone smartphone"
                    setVisibility={setVisibility}
                />
                <DropDownItem 
                    src="./apple-icon.svg" 
                    title="Smartphones Apple"
                    href="/products"
                    alt="Icone apple"
                    setVisibility={setVisibility}
                />
                <DropDownItem 
                    src="./bug.svg" 
                    title="Em breve"
                    href="/products"
                    alt="alt"
                    setVisibility={setVisibility}
                />
                <DropDownItem 
                    src="./bug.svg" 
                    title="Em breve"
                    href="/products"
                    alt="alt"
                    setVisibility={setVisibility}
                />
            </DropDown>
        </header>
    )
}
