import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Chanasia',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="absolute top-0 left-0 w-full flex justify-center items-center text-center select-none">
          <div className="py-4 text-xl w-5/6 mx-auto border-b border-gray-500">
            CHANASIA
          </div>
        </div> */}
        {children}
      </body>
    </html>
  )
}
