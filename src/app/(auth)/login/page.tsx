'use client';

import Logo from "@/client/components/icons/logo";
import Button from "@/client/components/input/button";
import TextInput from "@/client/components/input/text-input";
import useAuth from "@/client/hooks/useAuth";
import { useEffect, useState } from "react";

type Props = {
}

export default function Login() {
    const { response, authenticate, error, loading } = useAuth({
        username: '1234',
        password: '123'
    })

    useEffect(()=>{
        console.log(loading);
        console.log(response);
        console.log(error);
    }, [loading, response, error])

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
                    <div className="flex flex-col my-4 gap-2">
                        <TextInput type="text" placeholder="Digite seu email" label="Email"/>
                        <TextInput type="password" placeholder="Digite sua senha" label="Senha"/>
                    </div>
                    <Button type="submit">
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