import axios, { AxiosResponse } from "axios";
import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

type Req = {
    body: any;
    url: string;
}

export default function usePost({ url, body }: Req){
    //Bearer token is declared in the auth-context.tsx
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    const post = async()=>{
        setLoading(true);
        clear();

        try{
            const response = await axios.post(url, JSON.stringify(body));
            setResponse(response);
            
            return response;
        }
        catch(error: any){
            setError(error);
            return error;
        }
        finally{
            setLoading(false);
        }
    }

    const clear = () => {
        setResponse(undefined);
        setError(undefined);
    }

    return { post, response, error, loading, clear }
}