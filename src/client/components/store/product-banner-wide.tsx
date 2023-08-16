import Image from "next/image";
import Link from "next/link";

type Props = {
  color: 'white' | 'black';
  textColor: 'white' | 'black';
  title: string;
  subTitle: string;
  children: React.ReactNode;
  href: string;
  linkContent: string;
}

export default function ProductBannerWide({ 
  color, 
  textColor, 
  title, 
  subTitle, 
  href, 
  linkContent,
  children
}: Props) {
  return (
        <div className='w-full h-1/2 rounded-md flex flex-col
        items-center p-4' style={{ color: textColor, backgroundColor: color}}>
          <div className="h-1/3">
            <h1 className="font-bold text-3xl text-center">
              {title} 
            </h1>
            <h2 className="text-gray-400 text-center text-lg"> 
              {subTitle}
            </h2>
            <Link href={href}>
              <p className="text-blue-600 text-center pt-2 text-xl underline underline-offset-4">
                {linkContent}
              </p>
            </Link>
          </div>
          <div className="h-2/3">
            {children}
          </div>
        </div>
    )
}