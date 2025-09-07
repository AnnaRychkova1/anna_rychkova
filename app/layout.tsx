import React from 'react';
import '@/styles/globals.css';
import { Inter, Roboto, Allura, Dancing_Script } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allura',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
});

export const metadata = {
  title: 'Anna Rychkova',
  description:
    'Portfolio of Anna Rychkova - software engineer, web developer and creator. Showcasing projects, skills and experience in modern technologies.',
  keywords: [
    'Anna Rychkova',
    'portfolio',
    'software engineer',
    'software developer',
    'web developer',
    'frontend',
    'backend',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Anna Rychkova' }],
  creator: 'Anna Rychkova',
  publisher: 'Anna Rychkova',
  icons: '/favicon.png',
  metadataBase: new URL('https://annarychkova.dev'),

  openGraph: {
    title: 'Anna Rychkova | Software Developer',
    description:
      'Discover the work and skills of Anna Rychkova – software engineer and web developer.',
    url: 'https://annarychkova.dev',
    siteName: 'Anna Rychkova Portfolio',
    images: [
      {
        url: '/logo_rectangle.png',
        width: 800,
        height: 600,
        alt: 'Anna Rychkova Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Rychkova | Software Developer',
    description:
      'Portfolio of Anna Rychkova – software engineer and web developer.',
    images: ['/logo_rectangle.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${allura.variable} ${dancing.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
