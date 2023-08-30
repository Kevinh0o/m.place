type Props = {
    key: string;
    item: string;
    method: 'get' | 'set' | 'remove' | 'clear';
}

export default function useLocalStorage({ key, item, method }: Props ){
    let data = [];

    switch(method){
        case 'get': data = JSON.parse(localStorage.getItem(key) || '[]');
            break;

        case 'set': pushItem(key, item);
            break;

        case 'remove': localStorage.removeItem(key);
            break;

        case 'clear': localStorage.clear();
            break;
    }

    if(method === 'get'){
        return data;
    }
}

function pushItem(key: string, item: string){
    const fetchedItem = localStorage.getItem(key);

    if(fetchedItem){
        //convert to array, push item and set it back to localStorage
        const newItem = JSON.parse(fetchedItem).push(item);

        localStorage.setItem(key, JSON.stringify(newItem));
    }

    if(!fetchedItem){
        //create array, push item to local storage
        const newItem = [item];

        localStorage.setItem(key, JSON.stringify(newItem));
    }
}