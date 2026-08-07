import { Nunito, Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundGlow from '@/components/ui/BackgroundGlow';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Fathurrahman Muhammad',
  description: 'My academic web',
  icons: {
    icon: '/icons/icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f4' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${nunito.variable} h-full`}
    >
      <body className="flex min-h-dvh flex-col">
        <BackgroundGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
