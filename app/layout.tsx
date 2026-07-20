import { Nunito, Borel, Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FloatingBadge from '@/app/components/FloatingBadge';

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

const borel = Borel({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-borel',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Fathurrahman Muhammad',
  description: 'My academic web',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#547E93',
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
      className={`${inter.variable} ${nunito.variable} ${borel.variable} h-full`}
    >
      <body className="flex min-h-dvh flex-col">
        <Navbar />
        {/* pt-20 menjaga agar konten tidak tertutup Navbar yang melayang */}
        <main className="flex min-h-dvh grow flex-col">{children}</main>
        <Footer />
        <FloatingBadge />
      </body>
    </html>
  );
}
