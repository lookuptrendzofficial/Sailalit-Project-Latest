import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sailalitinteriors.com"),

  title: "Sai Lalit Interior & Exterior & Co.",
  description:
    "Premium Interior & Exterior Design Company in Visakhapatnam, Vijayawada & Hyderabad.",

  icons: {
    icon: "https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg",
    shortcut:
      "https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg",
    apple:
      "https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg",
  },

  openGraph: {
    title: "Sai Lalit Interior & Exterior & Co.",
    description:
      "Premium Interior & Exterior Design Company in Visakhapatnam, Vijayawada & Hyderabad.",
    url: "https://sailalitinteriors.com",
    siteName: "Sai Lalit Interior & Exterior & Co.",
    type: "website",
    images: [
      {
        url: "https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Lalit Interior & Exterior & Co.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sai Lalit Interior & Exterior & Co.",
    description:
      "Premium Interior & Exterior Design Company in Visakhapatnam, Vijayawada & Hyderabad.",
    images: [
      "https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg",
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
