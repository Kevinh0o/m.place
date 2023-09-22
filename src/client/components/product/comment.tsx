type Props = {
    userId: string;
    date: Date;
    content: string;
}

export default function Comment({ userId, date, content }: Props) {

    const tempDate = new Date(date);
    const convertedDate = date.getDate()+ '/' + date.getMonth() + '/' + date.getFullYear();

    return (
        <div
            className="bg-white p-2 border m-2 flex flex-col"
            key={userId}
        >
            <div className="flex items-end text-xs">
                <p className="font-bold"> Enviado por: &nbsp;</p>
                <h1>
                    {userId}
                </h1>
                <p className="font-bold"> &nbsp; no dia: {convertedDate} </p>
            </div>
            <p className="px-5">
                {content}
            </p>
        </div>
    )
}