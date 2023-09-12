'use client';

import Logo from "@/client/components/icons/logo";
import Button from "@/client/components/input/button";
import TextInput from "@/client/components/input/text-input";
import usePost from "@/client/hooks/usePost";
import { useEffect } from "react";

type Props = {
}

export default function Register() {
    const { post, response, error, loading } = usePost({
        url: 'api/auth/register',
        body: {
            username: '12344',
            password: '123'
        }
    });

    useEffect(()=>{
    }, [loading, response, error])

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
                    {error &&
                        <p className="text-xs text-center text-red-500 font-bold">
                            {error}
                        </p>
                    }
                    <div className="flex flex-col my-4 gap-2">
                        <TextInput type="text" placeholder="Digite seu email" label="Email"/>
                        <TextInput type="text" placeholder="Digite seu nome de usuário" label="Nome de Usuário"/>
                        <TextInput type="password" placeholder="Digite sua senha" label="Senha"/>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="mr-2" name="terms" id="terms"/>
                        <label className="text-xs" htmlFor="terms">
                            Eu aceito os termos de uso da aplicação.
                        </label>
                    </div>
                    <Button type="submit">
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