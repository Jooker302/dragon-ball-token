import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dragon Balls Token',
  description: 'Dragon Balls Token on DxSale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/main.jpeg' className='rounded-full'></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
