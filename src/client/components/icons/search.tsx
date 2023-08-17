import Icon from "./icon"

type Props = {
    click: any;
}

export default function SearchIcon({ click }: Props) {

    return (
        <button onClick={()=>click(true)}>
            <Icon src="/search.svg" alt="Icone de pesquisa" size="sm"/>
        </button>
    )
}