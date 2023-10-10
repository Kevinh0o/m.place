'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useLocalStorage(key: string){
    var storage: Storage | undefined;
    
    if(typeof window !== "undefined"){
        var eventListener = window.addEventListener('storage', updateData);
        storage = window.localStorage;
    }

    const path = usePathname();

    const [data, setData] = useState<string[] | undefined>(JSON.parse(storage?.getItem(key) || '[]'));

    const [changed, setChanged] = useState(0);

    function updateData(){
        const localStorageData = storage?.getItem(key);

        if(localStorageData){
            const newData = JSON.parse(localStorageData);
            setData(newData);
        }
        if(!localStorageData){
            setData(undefined);
        }
    }
    
    const remove = (item: string)=>{
        const fetchedItem = storage?.getItem(key);
        
        //convert to array, filter/remove items and set it back to localStorage
        let parsedItem = JSON.parse(fetchedItem || '[]');
        
        parsedItem = parsedItem.filter((index: string) => index !== item);
        
        storage?.setItem(key, JSON.stringify(parsedItem));
        window.dispatchEvent(new Event('storage'));

        setChanged(changed + 1);
    }
    
    const push = (item: string)=>{
        const fetchedItem = storage?.getItem(key);
        
        if(fetchedItem){
            //convert to array, push item and set it back to localStorage
            let parsedItem = JSON.parse(fetchedItem);

            if(!parsedItem.includes(item)){
                parsedItem.push(item);
            }
            
            storage?.setItem(key, JSON.stringify(parsedItem));
            window.dispatchEvent(new Event('storage'));
        }
        
        if(!fetchedItem){
            //create array, push item to local storage
            const newItem = [item];
            
            storage?.setItem(key, JSON.stringify(newItem));
        }

        setChanged(changed + 1);
    }

    const clear = ()=>{
        storage?.removeItem(key)
    }
    
    //update data on mount and on storage change
    useEffect(()=>{
        updateData();

    }, [changed, eventListener, path])

    return {data, remove, push, clear, updateData};
}