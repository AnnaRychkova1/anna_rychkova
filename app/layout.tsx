import React from 'react';
import '@/styles/globals.css';
import { Inter, Allura } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});
const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
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
  metadataBase: new URL('https://anna.rychkova.com'),

  openGraph: {
    title: 'Anna Rychkova | Software Portfolio',
    description:
      'Discover the work and skills of Anna Rychkova – software engineer and web developer.',
    url: 'https://anna.rychkova.com',
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
    title: 'Anna Rychkova | Software Portfolio',
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
      <body className={`${inter.variable} ${allura.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
