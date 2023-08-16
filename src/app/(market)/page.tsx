import ProductBanner from "@/client/components/store/product-banner";
import ProductBannerWide from "@/client/components/store/product-banner-wide";
import Video from "@/client/components/video/video";

export default function Home() {
  return (
    <div className="bg-gray-200">

      <div className="h-screen">
        <Video src="./video.mp4"/>
      </div>

      <div className="h-screen p-2 gap-2 flex flex-col">
        <ProductBannerWide
          color="black" 
          textColor='white'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
          puts grila nilce
        </ProductBannerWide>

        <ProductBannerWide
          color="black" 
          textColor='white'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
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
        </ProductBanner>

        <ProductBanner
          color="white"
          textColor='black'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
        </ProductBanner>

        <ProductBanner
          color="white"
          textColor='black'
          title="Iphone 13"
          subTitle=" uiui aiai"
          href="/"
          linkContent="Comprar"
        >
        </ProductBanner>
      </div>

    </div>
  )
}