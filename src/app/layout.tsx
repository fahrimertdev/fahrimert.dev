import type { Metadata } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'fahrimert.dev — building things that ship',
  description: 'I build tools for developers, freelancers, and the internet.',
  metadataBase: new URL('https://fahrimert.dev'),
  openGraph: {
    title: 'fahrimert.dev — building things that ship',
    description: 'I build tools for developers, freelancers, and the internet.',
    url: 'https://fahrimert.dev',
    siteName: 'fahrimert.dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fahrimert.dev — building things that ship',
    description: 'I build tools for developers, freelancers, and the internet.',
    creator: '@fahrimert',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
