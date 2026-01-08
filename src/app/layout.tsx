import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gopal Khichar | Lead Software Engineer',
  description: 'Lead Software Engineer with 5+ years of experience in designing scalable cloud systems and enterprise-grade marketplaces using AWS, Node.js, MySQL and Python.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

