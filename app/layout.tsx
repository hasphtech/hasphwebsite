import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hasph — Virtual Software Company',
  description: 'Hasph solves real-world problems at scale.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
        <link rel="apple-touch-icon" href="/icon-180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Bebas+Neue&family=Epilogue:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden w-full">{children}</body>
    </html>
  )
}
