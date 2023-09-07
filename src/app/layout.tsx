'use client'
import AuthContextProvider from '@/client/contexts/auth-context'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/client/utils/query-client'

type Props = {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'm.Place',
  description: 'description',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
          {children}
          </AuthContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
