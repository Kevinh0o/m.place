import useLocalStorage from "./useLocalStorage";
import usePost from "./usePost";

type Req = {
    username: string;
    password: string;
}

export default function useAuth({ username, password }: Req){
    const { clear, push } = useLocalStorage('token');

    const body = {
        username: username,
        password: password
    }
        
    const response = usePost({ url: '/api/auth/login',  body: body });


    if(localStorage.length > 0){
        clear();
    }

    //if response == error > do not push, if response > push(); :)
    push( JSON.stringify(response) );
}