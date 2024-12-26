'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialValue = '';
  const [clientValue, setClientValue] = useState(initialValue);

  useEffect(() => {
    const newValue = '';
    // Update value on client-side only
    setClientValue(newValue);
  }, []);

  const isBrowser = typeof window !== 'undefined';

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
