import { useEffect, useState } from "react";

export default function useLocalStorage(key: string){
    const [data, setData] = useState<string[]>([]);

    const [changed, setChanged] = useState(0);

    function updateData(){
        const newData = JSON.parse(localStorage.getItem(key) || '[]')
        setData(newData)
    }
    
    const remove = (item: string)=>{
        const fetchedItem = localStorage.getItem(key);
        
        //convert to array, filter/remove items and set it back to localStorage
        let parsedItem = JSON.parse(fetchedItem || '[]');
        
        parsedItem = parsedItem.filter((index: string) => index !== item);
        
        localStorage.setItem(key, JSON.stringify(parsedItem));
        window.dispatchEvent(new Event('storage'));

        setChanged(changed + 1);
    }
    
    const push = (item: string)=>{
        const fetchedItem = localStorage.getItem(key);
        
        if(fetchedItem){
            //convert to array, push item and set it back to localStorage
            let parsedItem = JSON.parse(fetchedItem);

            if(!parsedItem.includes(item)){
                parsedItem.push(item);
            }
            
            localStorage.setItem(key, JSON.stringify(parsedItem));
            window.dispatchEvent(new Event('storage'));
        }
        
        if(!fetchedItem){
            //create array, push item to local storage
            const newItem = [item];
            
            localStorage.setItem(key, JSON.stringify(newItem));
        }

        setChanged(changed + 1);
    }

    const clear = ()=>{
        localStorage.removeItem(key)
    }
    
    //update data on mount and on storage change
    useEffect(()=>{
        updateData();

        window.addEventListener('storage', updateData);

        return () => {
            window.removeEventListener('storage', updateData);
        };
    }, [changed])

    return {data, remove, push, clear};
}