import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Layout/Header'

const roboto = Roboto({ subsets: ['latin'], weight:['100', '300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <main className="max-w-full px-5 max-auto">
      <Header />
        {children}
        <footer className='border-t p-8 text-center text-gray-500 mt-16'>
    &copy; 2023 All rights reserved
   </footer>
        </main>
        </body>
    </html>
  )
}
