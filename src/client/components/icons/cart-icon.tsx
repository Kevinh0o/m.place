import Link from "next/link"
import Icon from "./icon"
import useLocalStorage from "@/client/hooks/useLocalStorage";
import { motion } from "framer-motion";

type Props = {
    click: any;
}

export default function CartIcon({ click }: Props) {

    const { data: items } = useLocalStorage('cart');

    return (
        <button 
            className="flex flex-col justify-center items-center"
            onClick={()=>click(false)}
        >
            <Link href='/cart'>
                <Icon src="/shopping-bag.svg" alt="Icone de carrinho" size="sm"/>
            </Link>
            {items.length > 0 && 
                <motion.div 
                    className="h-0 w-0 relative right-2 bottom-4"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    >
                    <div className="h-2 w-2 bg-red-600 rounded-xl"/>
                </motion.div>
            }
        </button>
    )
}