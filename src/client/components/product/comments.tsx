import useFetch from "@/client/hooks/useFetch";
import Comment from "./comment";

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
                    return (
                        <div key={comment.userId}>
                            <Comment
                                userId={comment.userId} 
                                date={comment.createdAt}
                                content={comment.content}
                            />
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}