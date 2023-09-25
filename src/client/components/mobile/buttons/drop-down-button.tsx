import { useState } from "react";

type Props = {
    children: React.ReactNode;
}

export default function ButtonDropDown({children}: Props){
    const [isVisible, setVisibility] = useState(false);

    return(
        <div>
            <button
                onClick={()=>setVisibility(!isVisible)}
                className="md:hidden bg-white rounded-md shadow-sm border border-gray-300
                p-2"
            >
                {isVisible ?
                    <>
                        Fechar
                    </> :
                    <>
                        Filtro
                    </>
                }
            </button>

            {isVisible &&
                <div className="absolute shadow-2xl">
                    {children}
                </div>
            }
        </div>
    )
}