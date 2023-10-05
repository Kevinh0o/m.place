type Props = {
    description: string | undefined;
}

export default function Description({ description }: Props) {

    return (
        <div className="p-4">
            <h1 className="text-lg font-bold">
                Descrição do produto
            </h1>
            <p>
                {description}
            </p>
        </div>
    )
}