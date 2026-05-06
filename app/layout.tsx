import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adeboyejo David | Full-Stack Developer',
  description: 'Full-stack developer specializing in modern web technologies, creating beautiful and performant applications.',
  keywords: ['Full-stack developer', 'Next.js', 'React', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Adeboyejo David' }],
  creator: 'Adeboyejo David',
  openGraph: {
    title: 'Adeboyejo David | Full-Stack Developer',
    description: 'Full-stack developer specializing in modern web technologies.',
    type: 'website',
    url: 'https://adeboyejo-david.vercel.app',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a12',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="relative bg-gradient-to-br from-background via-background to-[rgb(20,15,35)]">
        <div className="fixed inset-0 pointer-events-none z-[1] mix-blend-overlay opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(0,240,255,0.03)]" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
