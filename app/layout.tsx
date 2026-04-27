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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Epilogue:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden w-full">{children}</body>
    </html>
  )
}
