'use client';

type Props = {
    type: string;
    options: string[];
}

export default function Selector({ type, options }: Props) {

    return (
        <div className="p-5 h-full">
            <h1 className="font-semi-bold">
                {type}
            </h1>
            <div className="p-2 h-10 flex flex-wrap gap-1">
                {options.map((e)=>{
                    return (
                        <div className="w-20 h-10" key={e}>
                            <label htmlFor={e} className="cursor-pointer flex items-center w-0">
                                <input type="radio" name={type} id={e} className="peer w-[0px] h-[0px]"/>
                                <p className="border h-full p-1 px-4 rounded-md
                                peer-checked:border-black peer-checked:border-2">
                                    {e}
                                </p>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}