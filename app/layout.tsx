import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sai Lalit Interior & Exterior & Co',
  description: 'Premium Interior & Exterior Design Company in Visakhapatnam, Vijaynagaram, Hyderabad.',
  openGraph: {
    images: [
      {
        url: 'https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
