import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://www.hasph.com'
const TITLE = 'Hasph — Virtual Software Company building AI-native products'
const DESCRIPTION =
  'Hasph is a virtual software company building intelligent, AI-native products — including the Intelligent Planning Suite, EMI24 financial calculators and the Ludo Fox game.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s | Hasph' },
  description: DESCRIPTION,
  applicationName: 'Hasph',
  keywords: [
    'Hasph', 'virtual software company', 'AI software', 'SaaS', 'Intelligent Planning Suite',
    'EMI24', 'EMI calculator India', 'Ludo Fox', 'Ludo game Android',
  ],
  authors: [{ name: 'Hasph', url: SITE_URL }],
  creator: 'Hasph',
  publisher: 'Hasph',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Hasph',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Hasph — Virtual Software Company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/hasph-favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icon-180.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#4F35D2',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Hasph',
      url: SITE_URL,
      logo: `${SITE_URL}/icon-180.png`,
      email: 'hasphtech@gmail.com',
      description: DESCRIPTION,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Hasph',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'MobileApplication',
      name: 'Ludo Fox',
      operatingSystem: 'ANDROID',
      applicationCategory: 'GameApplication',
      url: 'https://play.google.com/store/apps/details?id=com.hasphgames.ludo',
      author: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebApplication',
      name: 'EMI24',
      url: 'https://emi24.com',
      applicationCategory: 'FinanceApplication',
      author: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="overflow-x-hidden w-full">{children}</body>
    </html>
  )
}
