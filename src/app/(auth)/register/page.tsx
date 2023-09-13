'use client';

import Logo from "@/client/components/icons/logo";
import Button from "@/client/components/input/button";
import TextInput from "@/client/components/input/text-input";
import usePost from "@/client/hooks/usePost";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
}

export default function Register() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorCount, setErrorCount] = useState<string[]>([]);
    const [enabledButton, setEnabledButton] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const userRegex = /^[a-zA-Z0-9._%+-]{3,}$/;
    const passwordRegex = /^[a-zA-Z0-9._%+-]{6,}$/;

    const { post, response, error, loading } = usePost({
        url: 'api/auth/register',
        body: {
            username: user,
            password: password
        }
    });

    useEffect(()=>{
        if(errorCount.length > 0){
            setEnabledButton(false);
        }
        else{
            setEnabledButton(true);
        }
    }, [errorCount])

    return (
        <div className="bg-gray-200 w-screen h-screen">
            <div className="h-[10%]">
                <Logo />
            </div>
            <div className="flex justify-center">
                <div className="bg-white w-[400px] p-10 rounded-md flex flex-col gap-4">
                    <h1 className="text-xl font-bold text-center">
                        Registrar-se
                    </h1>
                    {response &&
                        <p className="text-xs text-center text-green-500 font-bold">
                            {response.data}
                        </p>
                    }
                    {error &&
                        <p className="text-xs text-center text-red-500 font-bold">
                            {error.response.data}
                        </p>
                    }
                    <div className="flex flex-col my-4 gap-2">
                        <TextInput
                            type="text" 
                            value={email}
                            setValue={setEmail}
                            setErrorCount={setErrorCount}
                            errorCount={errorCount}
                            placeholder="Digite seu email" 
                            label="Email"
                            regex={emailRegex}
                            errorMessage="Email inválido."
                        />
                        <TextInput 
                            type="text"
                            value={user}
                            setValue={setUser}
                            setErrorCount={setErrorCount}
                            errorCount={errorCount}
                            placeholder="Digite seu nome de usuário" 
                            label="Nome de Usuário"
                            regex={userRegex}
                            errorMessage="O usuario precisa ter pelo menos 3 caracteres."
                        />
                        <TextInput 
                            type="password"
                            value={password}
                            setValue={setPassword}
                            setErrorCount={setErrorCount}
                            errorCount={errorCount}
                            placeholder="Digite sua senha" 
                            label="Senha"
                            regex={passwordRegex}
                            errorMessage="A senha precisa nao sei oq"
                        />
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="mr-2" name="terms" id="terms"/>
                        <label className="text-xs" htmlFor="terms">
                            Eu aceito os termos de uso da aplicação.
                        </label>
                    </div>
                    <Button type="submit" loading={loading} onClick={post} enabled={enabledButton}>
                        Registrar-se
                    </Button>
                    <div className="text-center">
                        <p className="text-xs">
                            Já tem uma conta? {' '}
                            <a href="/login" className="text-blue-600 font-bold underline">
                                Entrar
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}