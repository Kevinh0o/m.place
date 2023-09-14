import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import usePost from "./usePost";

type Req = {
    username: string;
    password: string;
}

export default function useAuth({ username, password }: Req){
    const { data: userToken, clear, push } = useLocalStorage('token');
    const [error, setError] = useState<any>();
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false);

    const body = {
        username: username,
        password: password
    }

    const { 
        post, 
        response: postResponse, 
        error: postError 
    } = usePost({ url: '/api/auth/login',  body: body });

    const authenticate = async() =>{
        setLoading(true);

        if(userToken.length > 0){
            clear();
        }

        try{
            await post();
        }
        catch{
            setError('ocorreu um erro');
            clear();
        }
        finally{
            setLoading(false);
        }
    }
    
    useEffect(()=>{
        if(postError){
            setError(postError.response.data)
        }

        if(!postError){
            setError(undefined);
        }

        if(postResponse){
            const parsedResponse = postResponse

            setResponse(parsedResponse.data.message)
            push(parsedResponse.data.data);
        }
    }, [postResponse, postError])

    return { response, error, authenticate, loading }
}