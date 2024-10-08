'use client';
import Footer from "@/client/components/footer/footer"
import Header from "@/client/components/header/header"
import SearchBar from "@/client/components/search-bar/search-bar"
import HeaderContextProvider from "@/client/contexts/header-context"
import FilterContextProvider from "@/client/contexts/product-filter";
import ProfileContextProvider from "@/client/contexts/profile-context";

type Props = {
  children: React.ReactNode
}

export default function marketLayout({ children }: Props) {
  return (
    <div className="bg-gray-200">
      <HeaderContextProvider>
        <SearchBar/>
        <Header/>
      </HeaderContextProvider>
      <FilterContextProvider>
        <ProfileContextProvider>
          {children}
        </ProfileContextProvider>
      </FilterContextProvider>
      <Footer/>
    </div>
  )
}