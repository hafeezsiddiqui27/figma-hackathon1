"use client";

import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import CartProvider from "./components/Providers";
import LoadingWrapper from "./components/loadingwrapper";

// app/layout.tsx

export const metadata = {
  title: "Aura ",
  description:
    "Aura - Providing the best products and services for your needs.",
  applicationName: "Aura",
  keywords: ["Aura", "Shopping", "E-commerce", "Best Products"],
  authors: [
    { name: "Hafeez Siddiqui", url: "https://figma-hackathon1.vercel.app/" },
  ],
};
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
