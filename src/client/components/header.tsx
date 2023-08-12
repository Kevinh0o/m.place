import Link from "next/link";
import Navigation from "./header-nav";
import Icon from "./icon";
import Logo from "./logo";

export default function Header() {
    return (
        <header className="bg-slate-900 w-screen text-slate-100 flex flex-col justify-center items-center fixed layer0">
            <div className="lg:max-w-5xl w-screen h-10 flex justify-around items-center">

                <Logo />

                <Navigation/>

                <div className="flex w-1/3 items-center justify-center">
                    <Link href="/search">
                        <Icon alt="Icone de pesquisa. "src="./search-white.svg" size="sm"/>  
                    </Link>
                    <Link href="/cart">
                        <Icon alt="Icone do carrinho. "src="./shopping-bag-white.svg" size="sm"/>
                    </Link>
                    <Link href="/user">
                        <Icon alt="Icone do perfil. "src="./profile-white.svg" size="sm"/>
                    </Link>
                </div>

            </div>
        </header>
    )
}
