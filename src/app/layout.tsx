import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import fav from "@/app/favicon.svg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azure Innovation",
  description: "Azure Innovations is a dynamic Apple Reseller and Service Provider, supplying genuine Apple products to individuals and educational institutions. Headquartered in Naraina (Delhi) with branches in Noida and Gurgaon, we ensure seamless service across NCR.",
  icons: {
    icon: fav.src,
    apple: fav.src
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
