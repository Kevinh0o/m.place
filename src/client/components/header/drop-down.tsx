import { AnimatePresence, motion } from "framer-motion";

type Props = {
    isVisible: boolean;
    children: React.ReactNode;
}

export default function DropDown({ children, isVisible }: Props) {
    
    return (
        <AnimatePresence>
            {isVisible &&
                <motion.nav 
                    className="bg-white h-auto p-4 rounded-md mt-2 shadow-lg
                    border border-gray-300
                    w-[90%] sm:w-[500px]
                    grid gap-2 sm:grid-cols-2"
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
