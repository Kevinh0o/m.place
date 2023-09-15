import axios from "axios";
import { useQuery } from "react-query";
import useLocalStorage from "./useLocalStorage";

type Req = {
    cache: string;
    url: string;
}

export default function useFetch<T = unknown>({ url, cache }: Req){

    //Bearer token configuration
    const { data: bearerToken } = useLocalStorage('token');
    
    const config = {
        headers: {
            Authorization: `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    }

    const { data, isFetching, error } = useQuery<T>(cache, async() =>{
        const response = await axios.get(url, config);

        return response.data
    })

    return {data, isFetching, error}
}