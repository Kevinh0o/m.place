type Props = {
    children: React.ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className="bg-white border border-gray-300 px-2 w-auto h-full 
        flex items-center justify-center rounded-lg shadow-md">
            {children}
        </div>
    )
}
