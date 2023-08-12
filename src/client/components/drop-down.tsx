'use client';
import { useContext } from "react";
import { HeaderContext } from "../contexts/header-context";
import { AnimatePresence, motion } from "framer-motion";

const animation = {
    initial: {
        y: -350
    },
    animate: {
        y: 0,
    },
    transition: {
        duration: 0.2
    },
    exit: {
        y: -350
    }
}

export default function DropDown() {
    const { 
        dropDownVisibility, 
        setVisibilityOfDropdown,
        category
    } = useContext(HeaderContext);

    function handleMouseEnter(){
        setVisibilityOfDropdown(false);
    }

    return (
        <AnimatePresence>
            {dropDownVisibility &&
                <motion.nav className="w-screen text-slate-100 fixed top-10 layer1 flex flex-col items-center"
                    initial={animation.initial}
                    animate={animation.animate}
                    transition={animation.transition}
                    exit={animation.exit}
                >
                    {category == 'store' ?
                        <div className="bg-slate-900 w-full p-10 flex justify-center">
                            <motion.div
                                className="lg:max-w-5xl w-screen"
                                exit={{ opacity: 0}}
                                animate={{ opacity: 1, y: 0}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                initial={{ opacity: 0, y: -10}}
                            >
                                <h1 className="font-light text-xs">
                                    Loja
                                </h1>
                                <ul className="text-xl">
                                    <li className="m-2">Smartphones</li>
                                    <li className="m-2">Destaques</li>
                                    <li className="m-2">Promoções</li>
                                </ul>
                                <p className="font-medium text-sm m-2">
                                    Ver todos os produtos.
                                </p>
                            </motion.div>
                        </div>
                        :
                        <div className="bg-slate-900 w-full p-10 flex justify-center">
                            <motion.div
                                className="lg:max-w-5xl w-screen"
                                exit={{ opacity: 0}}
                                animate={{ opacity: 1, y: 0}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                initial={{ opacity: 0, y: -10}}
                            >
                                <h1 className="font-light text-xs">
                                    Smartphone
                                </h1>
                                <ul className="text-xl">
                                    <li className="m-2">Apple</li>
                                    <li className="m-2">Destaques</li>
                                    <li className="m-2">Promoções</li>
                                </ul>
                                <p className="font-medium text-sm m-2">
                                    Ver todos os produtos.
                                </p>
                            </motion.div>
                        </div>
                    }
                    <motion.div 
                        className="bg-slate-600/20 w-screen h-screen backdrop-blur-sm"
                        onMouseEnter={handleMouseEnter}
                        exit={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 0.1 }}
                        initial={{ opacity: 0}}
                    />
                </motion.nav>
            }
        </AnimatePresence>
    )
}
