

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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aura- Elevate Your Fashion",
  description: "Discover Aura – Elevate your fashion with our exclusive range of stylish, high-quality clothing. From trendy essentials to statement pieces, find the perfect outfit to express your unique style. Shop now and step up your fashion game!",
  keywords: "aura, products, online store, best deals,clothes,sale,cheap,best clthes",
  
  icons: {
    icon: "/favicon.ico", 
  },
}
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
// // 'use client';
// // import { ClerkProvider } from '@clerk/nextjs';

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <ClerkProvider>
// //       <html lang="en">
// //         <body>{children}</body>
// //       </html>
// //     </ClerkProvider>
// //   );
// // }
