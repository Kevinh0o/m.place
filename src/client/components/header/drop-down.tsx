import { AnimatePresence, motion } from "framer-motion";

type Props = {
    isVisible: boolean;
    children: React.ReactNode;
}

export default function DropDown({ children, isVisible }: Props) {
    
    return (
        <AnimatePresence>
            {isVisible &&
                <motion.nav className="bg-gray-50 h-auto w-1/2 p-4 rounded-xl 
                grid grid-cols-2 gap-2 mt-2 shadow-lg"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                >
                    {children}
                </motion.nav>
            }
        </AnimatePresence>
    )
}
