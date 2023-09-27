'use client';

type Props = {
    type: string;
    options: string[];
}

export default function ColorSelector({ type, options }: Props) {

    return (
        <div className="">
            <h1 className="font-semi-bold text-sm">
                {type}
            </h1>
            <div className="p-2 h-10 flex flex-wrap gap-1">
                {options.map((e)=>{
                    return (
                        <div className="w-6 h-6" key={e}>
                            <label htmlFor={e} className="cursor-pointer flex items-center w-6 h-6">
                                <input type="radio" name={type} id={e} className="peer w-[0px] h-[0px]"/>
                                <div className="border border-gray-300 w-full h-full
                                rounded-full peer-checked:border-gray-500 p-1">
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