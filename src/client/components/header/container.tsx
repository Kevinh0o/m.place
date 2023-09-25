type Props = {
    children: React.ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className="bg-gray-50 border border-gray-300 p-1 w-auto h-full 
        flex items-center justify-center rounded-lg shadow-md">
            {children}
        </div>
    )
}
