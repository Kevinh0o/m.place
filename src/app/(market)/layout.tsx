import Header from "@/client/components/header/header"

type Props = {
  children: React.ReactNode
}

export default function marketLayout({ children }: Props) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}
