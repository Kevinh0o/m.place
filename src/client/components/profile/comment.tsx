import usePost from "@/client/hooks/usePost";
import { useEffect, useState } from "react";
import LoadingBlack from "../icons/loading-animation-black";
import Button from "../input/button";
import usePut from "@/client/hooks/usePut";

type Props = {
    userId: string;
    date: Date;
    content: string;
    productId: string;
}

export default function Comment({ userId, date, content, productId }: Props) {
    const [isUpdateVisible, setUpdateVisibility] = useState(false);
    const [update, setUpdate] = useState('');

    const {post, response, error, loading} = usePost({
        url: '/api/comment/delete',
        body: {
            productId: productId
        }
    });

    const {
        post: updatePost,
        response: updateResponse,
        error: updateError,
        loading: updateLoading
    } = usePut({
        url: '/api/comment/update',
        body: {
            productId: productId,
            content: update
        }
    });

    const newDate = new Date(date);
    const convertedDate = newDate.toLocaleDateString();

    return (
        <div>
            <div
                className="bg-white p-2 border m-2 flex flex-col"
                >
                {response?.data ?
                    <div> 
                        {response.data}
                    </div> :
                    <>
                        {error && 
                            <p className="text-red-500 text-sm">
                                {error.response.data} 
                            </p>
                        }
                        <div className="flex gap-4">
                        {loading && <LoadingBlack />}
                            <button 
                                className="text-sm text-green-500 underline"
                                onClick={() => setUpdateVisibility(true)}
                            >
                                Atualizar
                            </button>
                            <button className="text-sm text-red-500 underline" onClick={post}>
                                Excluir
                            </button>
                        </div>
                        <div className="flex items-end text-xs">
                            <p className="font-bold"> Enviado por você </p>
                            <p className="font-bold"> &nbsp; no dia: {convertedDate} </p>
                        </div>
                        <p className="px-5">
                            {content}
                        </p>
                    </>
                }
            </div>

            {isUpdateVisible &&
                <div className="bg-white p-2 border m-2 flex flex-col gap-2">
                    <button 
                        className="text-sm text-green-500 underline"
                        onClick={() => setUpdateVisibility(false)}
                    >
                        Fechar
                        
                    </button>
                    {updateResponse?.data &&
                        <div className="text-sm text-green-500">
                            {updateResponse.data}
                        </div>
                    }
                    {updateError &&
                        <div className="text-sm text-red-500">
                            {updateError.response.data}
                        </div>
                    }
                    <label className="text-sm" htmlFor={'comment' + productId}>
                        Atualize seu comentário
                    </label>
                    <textarea 
                        className="p-2 border text-sm border-gray-300 rounded-md resize-none" 
                        id={'comment' + productId}
                        placeholder="Escreva seu comentário aqui"
                        onChange={(e) => {setUpdate(e.target.value)}}
                    >
                    </textarea>
                    <Button
                        type="button"
                        loading={updateLoading}
                        enabled={!updateLoading}
                        onClick={updatePost}
                    >
                            Atualizar
                    </Button>
                </div>
            }
        </div>
    )
}