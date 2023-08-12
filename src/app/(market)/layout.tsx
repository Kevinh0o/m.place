import DropDown from "@/client/components/drop-down"
import Header from "@/client/components/header"
import HeaderContextProvider from "@/client/contexts/header-context"

type Props = {
  children: React.ReactNode
}

export default function marketLayout({ children }: Props) {
  return (
    <div>
        <HeaderContextProvider>
          <Header/>
          <DropDown/>
        </HeaderContextProvider>
        {children}
    </div>
  )
}
