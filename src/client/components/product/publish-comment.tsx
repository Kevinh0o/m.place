import usePost from "@/client/hooks/usePost";
import Button from "../input/button"
import { useState } from "react";

type Props = {
    productId: string;
}

export default function PublishComment({ productId }: Props) {
    const [content, setContent] = useState<string>('');

    const { post, loading, error, response } = usePost({
        url: '/api/comment/post',
        body: {
            productId: parseInt(productId),
            content: content,
        }
    });

    if(response){
        return(
            <div className="bg-white p-2 border m-2 mb-5 text-center text-green-500">
                Comentario publicado com sucesso!
            </div>
        )
    }

    return (
        <div
            className="bg-white p-2 border m-2 flex flex-col mb-5"
        >
            {error &&
                <div className="text-center text-red-500 text-sm">
                    Ocorreu um erro ao publicar o comentario.
                </div>
            }
            <div className="flex items-end text-sm font-semibold">
                Publicar Comentário.
            </div>
            <div className="px-5 py-2">
                <textarea
                    className="w-full h-20 border border-gray-300 p-2 resize-none text-sm"
                    placeholder="Escreva seu comentário aqui."
                    onChange={(e)=>{setContent(e.target.value)}}
                />
            </div>
            <div className="w-[300px] self-center">
                <Button enabled={true} type="submit" onClick={post} loading={loading}>
                    Publicar Comentário!
                </Button>
            </div>
        </div>
    )
}