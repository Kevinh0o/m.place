type Props = {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    loading?: boolean;
    onClick?: () => void;
    enabled?: boolean;
}

export default function Button({ children, type, loading, onClick, enabled }: Props) {

    return (
        <button 
            type={type}
            onClick={onClick}
            disabled={loading || !enabled}
            className="bg-purple-600 w-full h-10 rounded-md flex 
            justify-center items-center text-white text-sm hover:bg-purple-500 
            active:bg-purple-700 disabled:bg-purple-800"
        >
            {loading &&
                <p>
                    loading...
                </p>
            }

            {!loading &&
                <div>
                    {children}
                </div>
            }
        </button>
    )
}