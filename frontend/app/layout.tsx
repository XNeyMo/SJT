'use client';

import { Geist, Geist_Mono } from "next/font/google";

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import "./globals.css";

import { Notifications } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider forceColorScheme="dark">
          <Notifications />
          {children}
        </MantineProvider>
      </body >
    </html >
  );
}
