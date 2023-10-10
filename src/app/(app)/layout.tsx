'use client'
import AuthContextProvider from '@/client/contexts/auth-context'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/client/utils/query-client'

type Props = {
  children: React.ReactNode
}

export default function AppLayout({ children }: Props) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  )
}
