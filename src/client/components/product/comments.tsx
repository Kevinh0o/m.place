import useFetch from "@/client/hooks/useFetch";

type Props = {
    productId: string;
}

type Comment = {
    userId: string;
    content: string;
    createdAt: Date;
}

export default function Comments({ productId }: Props) {
    const page = 1;
    const take = 10;

    const req = {
        url: '/api/comment/' + productId + '?&page=' + page + '&take=' + take,
        cache: 'comment-' + productId + '-' + page + '-' + take
    };

    const { data: comments, isFetching } = useFetch<Comment[]>(req);

    return (
        <div className="">
            <h1 className="text-lg font-bold">
                Comentarios 
            </h1>
            {isFetching ? 
            <>
                carregando...
            </>:
            <div>
                {comments && comments.map((comment)=>{
                    const date = new Date(comment.createdAt);
                    const convertedDate = date.getDate()+ '/' + date.getMonth() + '/' + date.getFullYear();
                    return (
                        <div
                        className="bg-white p-2 border m-2 flex flex-col"
                        key={comment.userId}>
                            <div className="flex items-end text-xs">
                                <p className="font-bold"> Enviado por: &nbsp;</p>
                                <h1>
                                    {comment.userId}
                                </h1>
                                <p className="font-bold"> &nbsp; no dia: {convertedDate} </p>
                            </div>
                            <p className="px-5">
                                {comment.content}
                            </p>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}