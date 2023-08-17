import axios from "axios";
import { useQuery } from "react-query";

type Req = {
    cache: string;
    url: string;
}

export default function useFetch<T = unknown>({ url, cache }: Req){

    const { data, isFetching } = useQuery<T>(cache, async() =>{
        const response = await axios.get(url);

        return response.data
    })

    return {data, isFetching}
}