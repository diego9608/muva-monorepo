import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BackgroundElements from '@/components/BackgroundElements'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Propuesta de Crecimiento Digital - Grupo MUVA',
  description: 'Sistema automatizado de marketing y generación de leads para multiplicar sus ventas',
  openGraph: {
    title: 'Propuesta de Crecimiento Digital - Grupo MUVA',
    description: 'Sistema automatizado de marketing y generación de leads para multiplicar sus ventas',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <BackgroundElements />
        {children}
      </body>
    </html>
  )
}