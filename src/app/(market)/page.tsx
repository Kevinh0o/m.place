import ProductBanner from "@/client/components/store/product-banner";
import ProductBannerWide from "@/client/components/store/product-banner-wide";
import Video from "@/client/components/video/video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200">

      <div className="h-screen">
        <Video src="./video.mp4"/>
      </div>

      <div className="p-2 gap-2 flex flex-col">
        <ProductBannerWide
          color="white" 
          textColor='black'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
          <Image src='/galaxyfold-image.png' alt='Smartphone galaxy fold' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>
        </ProductBannerWide>

        <ProductBannerWide
          color="black" 
          textColor='white'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
          <Image src='/iphone14-image.jpeg' alt='Smartphone galaxy fold' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>
        </ProductBannerWide>

      </div>
      <div className="p-2 gap-2 flex flex-wrap justify-center md:flex-nowrap">
        <ProductBanner
          color="white"
          textColor='black'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
          <Image src='/galaxyfold-image.png' alt='Smartphone galaxy fold' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>
        </ProductBanner>

        <ProductBanner
          color="white"
          textColor='black'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
          <Image src='/galaxyfold-image.png' alt='Smartphone galaxy fold' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>

        </ProductBanner>

        <ProductBanner
          color="white"
          textColor='black'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
          <Image src='/galaxyfold-image.png' alt='Smartphone galaxy fold' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>
        </ProductBanner>
      </div>

    </div>
  )
}