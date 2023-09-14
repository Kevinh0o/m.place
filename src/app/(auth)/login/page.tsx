'use client';

import Logo from "@/client/components/icons/logo";
import Button from "@/client/components/input/button";
import TextInput from "@/client/components/input/text-input";
import useAuth from "@/client/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
}

export default function Login() {
    const router = useRouter();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const { response, authenticate, error, loading } = useAuth({
        username: user,
        password: password
    })

    useEffect(() => {
        if(response == 'Usuário logado com sucesso.') {
            setTimeout(() => {
                router.push('/')
            }, 2000)
        }
    }, [response])

    return (
        <div className="bg-gray-200 w-screen h-screen">
            <div className="h-[10%]">
                <Logo />
            </div>
            <div className="flex justify-center">
                <div className="bg-white w-[400px] p-10 rounded-md flex flex-col gap-4">
                    <h1 className="text-xl font-bold text-center">
                        Entrar
                    </h1>
                    {response &&
                        <p className="text-xs text-center text-green-500 font-bold">
                            {response}
                        </p>
                    }
                    {error &&
                        <p className="text-xs text-center text-red-500 font-bold">
                            {error}
                        </p>
                    }
                    <div className="flex flex-col my-4 gap-2">
                        <TextInput 
                            type="text"
                            value={user}
                            setValue={setUser}
                            placeholder="Digite seu nome de usuário" 
                            label="Nome de Usuário"
                            errorMessage="O usuario precisa ter pelo menos 3 caracteres."
                        />
                        <TextInput 
                            type="password" 
                            value={password}
                            setValue={setPassword}
                            placeholder="Digite sua senha" 
                            label="Senha"
                        />
                    </div>
                    <Button type="submit" loading={loading} onClick={authenticate} enabled={true}>
                        Entrar
                    </Button>
                    <div className="text-center">
                        <p className="text-xs">
                            Não tem uma conta? {' '}
                            <a href="/register" className="text-blue-600 font-bold underline">
                                Cadastrar
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}