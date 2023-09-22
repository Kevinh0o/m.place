import axios from "axios";
import { useQuery } from "react-query";

type Req = {
    cache: string;
    url: string;
    token?: string[];
}

export default function useFetch<T = unknown>({ url, cache, token }: Req){
    //Bearer token configuration, if needed its here, but it has a default
    //value in the axios.defaults.headers.common['Authorization']
    //its been declared in the auth-context.tsx
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }

    //Retry configuration, number of attempts and delay between them.
    //Retries are somehow important because the function to acess the localstorage
    //is async, so it takes some time to get the token, and the first attempt normally
    //fails, also if the server stops working it makes sure that the data is ok.
    const retryConfig = {
        retry: 3,
        retryDelay: 2000 //in ms
    }
    
    const { data, isFetching, error } = useQuery<T>(cache, async() =>{

        const response = await axios.get(url);

        return response.data;
    }, retryConfig)

    return {data, isFetching, error}
}