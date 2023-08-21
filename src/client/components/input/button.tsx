type Props = {
    children: React.ReactNode;
}

export default function Button({ children }: Props) {
    return (
        <button className="bg-purple-600 w-full h-10 rounded-md flex 
        justify-center items-center text-white">
            {children}
        </button>
    )
}