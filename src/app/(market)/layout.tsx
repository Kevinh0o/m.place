import Header from "@/client/components/header/header"
import SearchBar from "@/client/components/search-bar/search-bar"
import HeaderContextProvider from "@/client/contexts/header-context"

type Props = {
  children: React.ReactNode
}

export default function marketLayout({ children }: Props) {
  return (
    <div>
        <HeaderContextProvider>
          <SearchBar/>
          <Header/>
        </HeaderContextProvider>
        {children}
    </div>
  )
}
