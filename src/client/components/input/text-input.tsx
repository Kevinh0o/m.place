'use client';

import { useEffect, useState } from "react";

type Props = {
    label?: string;
    placeholder: string;
    type: 'text' | 'password';
    regex?: RegExp;
    errorMessage?: string
    value: string;
    setValue: (value: string) => void;
    setErrorCount?: any;
    errorCount?: string[];
    dependencies?: any;
}

export default function TextInput({
    label, 
    type, 
    placeholder, 
    errorMessage, 
    regex,
    value,
    setValue,
    setErrorCount,
    errorCount,
    dependencies
}: Props) {
    const [error, setError] = useState(false);

    useEffect(()=>{
        if(dependencies && value != dependencies){
            //create an array that have label as its key value and represents +1 on the errorArray
            //also, check if the errorCount already have the label, if it does, don't add it again
            if(errorCount && !errorCount.includes(label || '')) {
                setErrorCount((prev: string[]) => [...prev, label]);
            }

            if(value.length > 0){
                setError(true);
            }
        }

        if(dependencies && value == dependencies){
            //delete the key value from the errorArray, represents -1 on the errorArray
            setErrorCount((prev: string[])=>prev.filter((item: string)=>item !== label));
            setError(false);
        }
    }, [dependencies, value])

    useEffect(()=>{
        if(regex && !regex.test(value)) {
            //create an array that have label as its key value and represents +1 on the errorArray
            //also, check if the errorCount already have the label, if it does, don't add it again
            if(errorCount && !errorCount.includes(label || '')) {
                setErrorCount((prev: string[]) => [...prev, label]);
            }

            if(value.length > 0){
                setError(true);
            }
        }

        if(regex && regex.test(value)) {
            //delete the key value from the errorArray, represents -1 on the errorArray
            setErrorCount((prev: string[])=>prev.filter((item: string)=>item !== label));
            setError(false);
        }
    }, [value])

    return (
        <div>
            {label &&
                <label className="text-xs px-1"> {label} </label>
            }
            {error &&
                <p className="text-xs text-red-500">
                    {errorMessage}
                </p>
            }
            <input 
                type={type}
                placeholder={placeholder}
                onChange={(e: any)=>setValue(e.target.value)}
                className="w-full p-2 rounded-md border
                focus:outline-none focus:border-purple-500 text-xs"
            />
        </div>
    )
}