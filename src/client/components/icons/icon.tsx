import Image from "next/image"

type Props = {
    alt: string;
    src: string;
    size: 'sm' | 'md' | 'lg' //small medium large
}

export default function Icon({ alt, src, size }: Props) {

    const sizes = {
        sm: { height: 20, width: 20 },
        md: { height: 30, width: 30 },
        lg: { height: 40, width: 40 }
    };

    const { height, width } = sizes[size];

    return (
        <>
            <Image
                alt={alt}
                src={src}
                height={height}
                width={width}
                className="m-2"
            />
        </>
    )
}