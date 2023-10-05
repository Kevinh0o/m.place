import useFetch from "@/client/hooks/useFetch";
import Comment from "./comment";
import LoadingBlack from "../icons/loading-animation-black";
import PublishComment from "./publish-comment";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/client/contexts/auth-context";

type Props = {
    productId: string;
}

type Comment = {
    userId: string;
    content: string;
    createdAt: Date;
}

export default function Comments({ productId }: Props) {
    const { user } = useContext(AuthContext);
    
    const page = 1;
    const take = 10;
    
    const { data: comments, isFetching, fetchError } = useFetch<Comment[]>({
        url: '/api/comment/' + productId + '?&page=' + page + '&take=' + take,
        cache: 'comment-' + productId + '-' + page + '-' + take
    });

    //Fetch for user specific comment
    const { data: comment, isFetching: commentIsFetching, fetchError: commentError } = useFetch<Comment>({
        url: '/api/user/comment/' + productId,
        cache: 'comment-' + productId + '-' + user
    })
    
    const showErrorMessage = fetchError || !comments || comments.length <= 0;

    return (
        <div className="p-4">
            <h1 className="text-lg font-bold">
                Comentarios 
            </h1>
            {isFetching ? 
                <div>
                    <LoadingBlack />
                </div>
                :
                <div>
                    {!user &&
                        <div className="text-center text-sm">
                            Precisa estar logado para comentar.
                        </div>
                    }
                    {!comment && user &&
                        <PublishComment productId={productId} />
                    }
                    {comment &&
                        <div className="mb-5">
                            <p className="text-sm px-5">
                                Seu comentario:
                            </p>
                            <Comment
                                userId={'Você'} 
                                content={comment.content}
                                date={comment.createdAt}
                            />
                        </div>
                    }
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
                    {showErrorMessage &&
                        <div className="text-center">
                            Ainda não há comentarios, seja o primeiro a comentar!
                        </div>
                    }
                </div>
            }
        </div>
    )
}