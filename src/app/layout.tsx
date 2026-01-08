import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://gkforge.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gopal Khichar | Lead Software Engineer',
    template: '%s | Gopal Khichar'
  },
  description: 'Lead Software Engineer with 5+ years of experience in designing scalable cloud systems and enterprise-grade marketplaces using AWS, Node.js, MySQL and Python. Expert in AI/ML, serverless architecture, and team leadership.',
  keywords: [
    'Gopal Khichar',
    'Lead Software Engineer',
    'Full Stack Developer',
    'AWS Expert',
    'Node.js Developer',
    'Python Developer',
    'React Developer',
    'Cloud Architect',
    'Software Engineer Pune',
    'AI Engineer',
    'TensorFlow',
    'Serverless',
    'iProgrammer Solutions',
    'gkforge'
  ],
  authors: [{ name: 'Gopal Khichar', url: siteUrl }],
  creator: 'Gopal Khichar',
  publisher: 'Gopal Khichar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Gopal Khichar - Portfolio',
    title: 'Gopal Khichar | Lead Software Engineer',
    description: 'Lead Software Engineer with 5+ years of experience in cloud systems, AI/ML, and enterprise marketplaces. Building scalable solutions with AWS, Node.js, and Python.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Gopal Khichar - Lead Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gopal Khichar | Lead Software Engineer',
    description: 'Lead Software Engineer with 5+ years of experience in cloud systems, AI/ML, and enterprise marketplaces.',
    creator: '@gopalkhichar',
    images: [`${siteUrl}/og-image.png`],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gopal Khichar',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    'https://linkedin.com/in/gopal-khichar',
    'https://github.com/imgk-dev',
    'https://leetcode.com/u/gkforge',
  ],
  jobTitle: 'Lead Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'iProgrammer Solutions Pvt. Ltd.',
  },
  description: 'Lead Software Engineer with 5+ years of experience in designing scalable cloud systems and enterprise-grade marketplaces.',
  knowsAbout: [
    'JavaScript',
    'Python',
    'Node.js',
    'React',
    'AWS',
    'Cloud Architecture',
    'AI/ML',
    'TensorFlow',
    'Microservices',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'MIT World Peace University',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'India',
  },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
