import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const meta = {
  title: {
    default: 'BeLight',
    template: '%s | BeLight'
  },
  description: 'Your BeLight project description',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}