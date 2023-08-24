type Props = {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
}

export default function Button({ children, type }: Props) {

    return (
        <button type={type} className="bg-purple-600 w-full h-10 rounded-md flex 
        justify-center items-center text-white">
            {children}
        </button>
    )
}