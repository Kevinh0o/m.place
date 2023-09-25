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

export default function ProductBanner({
  color, 
  textColor, 
  title, 
  subTitle, 
  href, 
  linkContent,
  children
}: Props) {

  return (
        <div 
          className='basis-full md:basis-1/2 h-96 rounded-md border border-gray-300 shadow-sm'
          style={{ color: textColor, backgroundColor: color}}
        >
         <div className="h-0 relative top-2">
            <h1 className="font-bold text-xl text-center">
              {title} 
            </h1>
            <h2 className="text-gray-400 text-center text-md"> 
              {subTitle}
            </h2>
            <Link href={href}>
              <p className="text-blue-600 text-center pt-2 text-md underline underline-offset-4">
                {linkContent}
              </p>
            </Link>
          </div>
          <div className="h-full">
            {children}
          </div>
        </div>
    )
}