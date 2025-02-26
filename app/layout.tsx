import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/landing/navbar/navbar'
import Footer from '@/components/landing/footer/footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Prosperia | La plateforme pour investir dans les PME rentables',
  icons: {
    icon: '/Prosperia_Logo-Icone-blanc.svg'
  },
  description:
    "Rejoignez la communauté d'investisseurs Prosperia et investissez dans la transmission et la croissance externe des PME rentables en France.",
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
