import NavigationItem from "./navigation-item";

export default function Navigation() {

    return (
        <nav className="h-full min-w-[300px] max-w-[500px] p-5">
            <div className="bg-white rounded-md border border-gray-300">
                <h1 className="shadow-sm border-b p-1 text-center font-bold">
                    Menu
                </h1>
                <ul className="p-2 flex flex-col gap-2 text-sm">
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
