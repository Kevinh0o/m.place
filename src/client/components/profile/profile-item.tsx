'use client';

type Props = {
    title: string;
    item?: string;
}

export default function ProfileItem({title, item}: Props) {

    return (
        <div className="max-w-[650px] p-1 border border-gray-300 rounded-md flex">
            <p className="border-r border-gray-300 w-1/2 text-center">
                {title}
            </p>
            <p className="px-2 w-1/2 text-sm">
                {item}
            </p>
        </div>
    )
}
