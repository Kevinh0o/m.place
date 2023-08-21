'use client';

type Props = {
    type: string;
    options: string[];
}

export default function ColorSelector({ type, options }: Props) {

    return (
        <div className="p-5 h-full">
            <h1 className="font-semi-bold">
                {type}
            </h1>
            <div className="p-2 h-10 flex flex-wrap gap-1">
                {options.map((e)=>{
                    return (
                        <div className="w-8 h-8" key={e}>
                            <label htmlFor={e} className="cursor-pointer flex items-center w-8 h-8">
                                <input type="radio" name={type} id={e} className="peer w-[0px] h-[0px]"/>
                                <div className="border-2 border-gray-300 w-full h-full
                                rounded-full peer-checked:border-black p-1">
                                    <div className='w-full h-full rounded-full' 
                                        style={{backgroundColor: e}}
                                    />
                                </div>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}