import { useEffect, useState } from "react";

type Props = {
    key: string;
    item: string;
    method: 'get' | 'set' | 'remove' | 'clear';
}

export default function useLocalStorage({ key, item, method }: Props ){
    const [data, setData] = useState([]);

    function updateData(){
        const newData = JSON.parse(localStorage.getItem(key) || '[]')
        setData(newData)
    }

    //update data on mount and on storage change
    useEffect(()=>{
        updateData();

        window.addEventListener('storage', updateData);

        return () => {
            window.removeEventListener('storage', updateData);
        };
    }, [key])

    switch(method){
        case 'get': return data;
            break;

        case 'set': pushItem(key, item);
            break;

        case 'remove': removeItem(key, item);
            break;

        case 'clear': localStorage.clear();
            break;
    }
}

function pushItem(key: string, item: string){
    const fetchedItem = localStorage.getItem(key);

    if(fetchedItem){
        //convert to array, push item and set it back to localStorage
        let parsedItem = JSON.parse(fetchedItem);

        parsedItem.push(item);

        localStorage.setItem(key, JSON.stringify(parsedItem));
    }

    if(!fetchedItem){
        //create array, push item to local storage
        const newItem = [item];

        localStorage.setItem(key, JSON.stringify(newItem));
    }
}

function removeItem(key: string, item: string){
    const fetchedItem = localStorage.getItem(key);

    //convert to array, filter/remove items and set it back to localStorage
    let parsedItem = JSON.parse(fetchedItem || '[]');

    parsedItem = parsedItem.filter((index: string) => index !== item);

    localStorage.setItem(key, JSON.stringify(parsedItem));
}