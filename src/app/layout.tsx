import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'If We Speak',
  description: 'Média sportif indépendant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* TikTok embed script */}
        <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="absolute bg-repeat bg-center w-full" style={{ backgroundImage: "url('/bg-iws.png')" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
