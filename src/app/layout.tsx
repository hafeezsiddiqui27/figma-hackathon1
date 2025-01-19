"use client";

import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/layout/Footer";
import CartProvider from "./components/layout/Providers";
import LoadingWrapper from "./components/layout/loadingwrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        <LoadingWrapper>
          <CartProvider>{children}</CartProvider>
        </LoadingWrapper>

        <Footer />
      </body>
    </html>
  );
}
