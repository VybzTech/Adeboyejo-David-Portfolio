import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

// Font imports
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-clash',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'David Adeboyejo | Product Engineer',
  description:
    'Product Engineer based in Lagos. Building premium SaaS products that ship fast. Full-stack developer specializing in React, TypeScript, and Node.js.',
  metadataBase: new URL('https://davidadeboyejo.com'),
  openGraph: {
    title: 'David Adeboyejo | Product Engineer',
    description:
      'Product Engineer building premium SaaS products. Full-stack React/Node.js developer.',
    url: 'https://davidadeboyejo.com',
    siteName: 'David Adeboyejo',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'David Adeboyejo - Product Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Adeboyejo | Product Engineer',
    description: 'Building premium SaaS products that ship fast.',
    images: ['/og-image.png'],
    creator: '@VybzTech',
  },
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
  other: {
    'google-site-verification': '',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0e27',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://davidadeboyejo.com" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'David Adeboyejo',
              url: 'https://davidadeboyejo.com',
              jobTitle: 'Product Engineer',
              email: 'hello@davidadeboyejo.com',
              image: 'https://davidadeboyejo.com/og-image.png',
              sameAs: [
                'https://linkedin.com/in/adeboyejo-david',
                'https://github.com/VybzTech',
                'https://twitter.com/VybzTech',
              ],
              location: {
                '@type': 'Place',
                name: 'Lagos, Nigeria',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
