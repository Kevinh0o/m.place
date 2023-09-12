import { type } from "os";

type Props = {
    label: string;
    placeholder: string;
    type: 'text' | 'password';
}

export default function TextInput({label, type, placeholder}: Props) {

    return (
        <div>
            <label className="text-xs px-1"> {label} </label>
            <input 
                type={type}
                placeholder={placeholder}
                className="w-full p-2 rounded-md border
                focus:outline-none focus:border-purple-500 text-xs"
            />
        </div>
    )
}