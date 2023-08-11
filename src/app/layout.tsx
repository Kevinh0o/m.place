import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        {children}
      </body>
    </html>
  )
}
