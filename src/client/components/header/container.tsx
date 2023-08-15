
type Props = {
    children: React.ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className="bg-gray-50 w-auto h-full flex items-center
        justify-center rounded-xl shadow-md">
            {children}
        </div>
    )
}
