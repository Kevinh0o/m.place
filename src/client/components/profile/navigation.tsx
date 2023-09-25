import NavigationItem from "./navigation-item";

export default function Navigation() {

    return (
        <nav className="h-full md:w-[300px] w-[80vw] md:pt-5">
            <div className="bg-white rounded-md border border-gray-300">
                <h1 className="md:shadow-sm border-b p-1
                text-center font-bold">
                    Menu
                </h1>
                <ul className="p-2 flex flex-col gap-4 md:gap-2 md:text-sm">
                    <NavigationItem link="/profile" title="Perfil"/>
                    <NavigationItem link="/profile/update" title="Atualizar dados"/>
                    <NavigationItem link="/profile/comments" title="Comentários"/>
                    <NavigationItem link="/profile/orders" title="Pedidos"/>
                    <NavigationItem link="/profile/dashboard" title="Dashboard"/>
                    <NavigationItem link="/profile/orders" title="Sair"/>
                </ul>
            </div>
        </nav>
    )
}
