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
          title="Samsung Galaxy S23 Ultra"
          subTitle="5G 256GB Tela 6.8'' 12GB RAM Câmera Quádrupla de até 200MP + Selfie 12MP"
          href="/products/20"
          linkContent="Comprar"
        >
          <Image src='/Samsung-s23-banner.png' alt='Smartphone Samsung galaxy S23 Ultra' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>
        </ProductBannerWide>

        <ProductBannerWide
          color="black" 
          textColor='white'
          title="Iphone 15"
          subTitle="Qualidade e elegância em um só lugar"
          href="/products/12"
          linkContent="Comprar"
        >
          <Image src='/iphone14-image.jpeg' alt='Smartphone Apple Iphone 13' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>
        </ProductBannerWide>

      </div>
      <div className="p-2 gap-2 flex flex-wrap justify-center md:flex-nowrap">
        <ProductBanner
          color="black"
          textColor='white'
          title="Iphone 14"
          subTitle="Em até 12x de R$492,99"
          href="/products/11"
          linkContent="Comprar"
        >
          <Image src='/iphone-banner-side.png' alt='Smartphone Iphone 14 Image' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>
        </ProductBanner>

        <ProductBanner
          color="white"
          textColor='black'
          title="Samsung S22"
          subTitle=""
          href="/products/17"
          linkContent="Comprar"
        >
          <Image src='/samsung-banner.png' alt='Smartphone Samsung S22 Image' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>

        </ProductBanner>

        <ProductBanner
          color="white"
          textColor='black'
          title="Samsung S23"
          subTitle="Em até 12x de R$325,99 ou R$3899.99 á vista"
          href="/products/20"
          linkContent="Comprar"
        >
          <Image src='/Samsung-s23-banner.png' alt='Smartphone Samsung S23 Image' width={1440} height={640} className="h-full object-cover overflow-hidden rounded-lg"/>
        </ProductBanner>
      </div>

    </div>
  )
}