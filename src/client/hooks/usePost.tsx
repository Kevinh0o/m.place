import axios, { AxiosResponse } from "axios";
import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

type Req = {
    body: any;
    url: string;
}

export default function usePost({ url, body }: Req){
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: bearerToken } = useLocalStorage('token');
    
    const config = {
        headers: {
            Authorization: `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    }

    const post = async()=>{
        setLoading(true);
        clear();

        try{
            const response = await axios.post(url, JSON.stringify(body), config);
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