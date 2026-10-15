import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans, Playfair_Display, Great_Vibes } from 'next/font/google'
import './globals.css'

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const signature = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-signature-font',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mahbubalamrazu-ivory.vercel.app'),
  title: 'Mahbub Alam Razu',
  description: 'The official digital identity of Mahbub Alam Razu — entrepreneur, business leader, and CEO of Circle Network.',
  icons: {
    icon: '/profile.ico',
    shortcut: '/profile.ico',
    apple: '/profile.webp',
  },
  openGraph: {
    title: 'Mahbub Alam Razu',
    description: 'The official digital identity of Mahbub Alam Razu — entrepreneur, business leader, and CEO of Circle Network.',
    url: 'https://mahbubalamrazu-ivory.vercel.app',
    siteName: 'Mahbub Alam Razu',
    images: [
      {
        url: '/profile.webp',
        width: 1150,
        height: 1310,
        alt: 'Mahbub Alam Razu',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mahbub Alam Razu',
    description: 'The official digital identity of Mahbub Alam Razu — entrepreneur, business leader, and CEO of Circle Network.',
    images: ['/profile.webp'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f172a' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${signature.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
