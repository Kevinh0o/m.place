'use client';
import Button from "@/client/components/input/button";
import TextInput from "@/client/components/input/text-input";
import { ProfileContext } from "@/client/contexts/profile-context";
import usePost from "@/client/hooks/usePost";
import { useContext, useEffect, useState } from "react";

type User = {
}

export default function Update() {
    const {user} = useContext(ProfileContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmRegex, setPasswordConfirmRegex] = useState<RegExp>();
    const [errorCount, setErrorCount] = useState<string[]>([]);
    const [enabledButton, setEnabledButton] = useState(false);

    const userRegex = /^[a-zA-Z0-9._%+-]{3,}$/;
    const passwordRegex = /^[a-zA-Z0-9._%+-]{6,}$/;

    const { post, response, error, loading } = usePost({
        url: 'api/user/update',
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

    useEffect(()=>{
        const passwordToRegex = new RegExp(`^${password}$`)
        setPasswordConfirmRegex(passwordToRegex);
    }, [password, passwordConfirm, passwordConfirmRegex])

    return(
        <div className="p-2">
            <div>
                <h1 className="text-2xl">
                    Atualizar dados
                </h1>
            </div>
            <div className="p-5">
                <h2 className="text-lg">
                    Dados
                </h2>
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
                <div className="flex flex-col gap-2">
                    <TextInput 
                        type="text"
                        value={username}
                        setValue={setUsername}
                        setErrorCount={setErrorCount}
                        errorCount={errorCount}
                        placeholder={user?.username || ''}
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
                            placeholder="Digite sua nova senha" 
                            label="Nova senha"
                            regex={passwordRegex}
                            errorMessage="A senha precisa ter pelo menos 6 caracteres."
                        />
                        <TextInput 
                            type="password"
                            value={passwordConfirm}
                            setValue={setPasswordConfirm}
                            setErrorCount={setErrorCount}
                            errorCount={errorCount}
                            placeholder="Digite a senha novamente" 
                            label="Confirmar Senha"
                            regex={passwordConfirmRegex}
                            errorMessage="As senhas precisam ser iguais."
                        />
                        <Button type="submit" loading={loading} onClick={post} enabled={enabledButton}>
                            Atualizar dados
                        </Button>
                </div>
            </div>
        </div>
    )
}