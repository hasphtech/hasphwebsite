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
        {/* Favicon — SVG scales perfectly at all sizes; .ico fallback for older browsers */}
        <link rel="icon" type="image/svg+xml" href="/hasph-favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Nunito 800 — rounded, extra-bold letterforms matching the Hasph wordmark.
          Inter + Bebas Neue + Epilogue retained for body/display/UI text.
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Inter:wght@400;600;700&family=Bebas+Neue&family=Epilogue:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden w-full">{children}</body>
    </html>
  )
}
