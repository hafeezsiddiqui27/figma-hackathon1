  import localFont from "next/font/local";
// // // import "./globals.css";
// // // import Footer from "./components/layout/Footer";
// // // import CartProvider from "./components/layout/Providers";
// // // import LoadingWrapper from "./components/layout/loadingwrapper";

// // // // // const geistSans = localFont({
// // // // //   src: "./fonts/GeistVF.woff",
// // // // //   variable: "--font-geist-sans",
// // // // //   weight: "100 900",
// // // // // });
// // // // // const geistMono = localFont({
// // // // //   src: "./fonts/GeistMonoVF.woff",
// // // // //   variable: "--font-geist-mono",
// // // // //   weight: "100 900",
// // // // // });
// // // // // import { Metadata } from "next";

// // // // // export const metadata: Metadata = {
// // // // //   title: "Aura- Elevate Your Fashion",
// // // // //   description: "Discover Aura – Elevate your fashion with our exclusive range of stylish, high-quality clothing. From trendy essentials to statement pieces, find the perfect outfit to express your unique style. Shop now and step up your fashion game!",
// // // // //   keywords: "aura, products, online store, best deals,clothes,sale,cheap,best clthes",

// // // // //   icons: {
// // // // //     icon: "/favicon.ico",
// // // // //   },
// // // // // }
// // // // // // export default function RootLayout({
// // // // // //   children,
// // // // // // }: Readonly<{
// // // // // //   children: React.ReactNode;
// // // // // // }>) {
// // // // // //   return (

// // // // // //     <html lang="en">

// // // // // //       <body
// // // // // //         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
// // // // // //       >

// // // // // //         <LoadingWrapper>
// // // // // //           <ClerkProvider>
// // // // // //             <CartProvider>{children}</CartProvider>
// // // // // //             </ClerkProvider>
// // // // // //         </LoadingWrapper>

// // // // // //         <Footer />
// // // // // //       </body>
// // // // // //     </html>
// // // // // //   );
// // // // // // }

// // // // // import {
// // // // //   ClerkProvider,
// // // // //   SignInButton,
// // // // //   SignedIn,
// // // // //   SignedOut,
// // // // //   UserButton,
// // // // // } from "@clerk/nextjs";
// // // // // import SignInPage from "./sign-in/page";
// // // // // import "./globals.css";
// // // // // export default function RootLayout({
// // // // //   children,
// // // // // }: {
// // // // //   children: React.ReactNode;
// // // // // }) {
// // // // //   return (
// // // // //     <ClerkProvider>
// // // // //       <html lang="en">
// // // // //         <body>
// // // // //           <SignedOut>
         
// // // // //           </SignedOut>
// // // // //           <SignedIn>
// // // // //             <UserButton />
// // // // //           </SignedIn>
// // // // //           <LoadingWrapper>
// // // // //             <CartProvider>{children}</CartProvider>
// // // // //           </LoadingWrapper>
// // // // //         </body>
// // // // //       </html>
// // // // //     </ClerkProvider>
// // // // //   );
// // // // // }
// // // // import localFont from "next/font/local";
// // // // import "./globals.css";
// // // // import Footer from "./components/layout/Footer";
// // // // import CartProvider from "./components/layout/Providers";
// // // // import LoadingWrapper from "./components/layout/loadingwrapper";
// // // // import {
// // // //   ClerkProvider,
// // // //   SignInButton,
// // // //   SignedIn,
// // // //   SignedOut,
// // // //   UserButton,
// // // // } from "@clerk/nextjs";
// // // // import { Metadata } from "next";

// // // // // Local Fonts
// // // // const geistSans = localFont({
// // // //   src: "./fonts/GeistVF.woff",
// // // //   variable: "--font-geist-sans",
// // // //   weight: "100 900",
// // // // });
// // // // const geistMono = localFont({
// // // //   src: "./fonts/GeistMonoVF.woff",
// // // //   variable: "--font-geist-mono",
// // // //   weight: "100 900",
// // // // });

// // // // // Metadata Configuration
// // // // export const metadata: Metadata = {
// // // //   title: "Aura - Elevate Your Fashion",
// // // //   description:
// // // //     "Discover Aura – Elevate your fashion with our exclusive range of stylish, high-quality clothing. From trendy essentials to statement pieces, find the perfect outfit to express your unique style. Shop now and step up your fashion game!",
// // // //   keywords:
// // // //     "aura, products, online store, best deals, clothes, sale, cheap, best clothes",
// // // //   icons: {
// // // //     icon: "/favicon.ico",
// // // //   },
// // // // };

// // // // export default function RootLayout({
// // // //   children,
// // // // }: {
// // // //   children: React.ReactNode;
// // // // }) {
// // // //   return (
// // // //     <ClerkProvider>
// // // //       <html lang="en">
// // // //         <body
// // // //           className={`${geistSans.variable} ${geistMono.variable} antialiased`}
// // // //         >
// // // //           {/* SignedOut Section */}
// // // //           <SignedOut>
// // // //             <div className="sign-in-wrapper">
// // // //               <p>Please sign in to continue:</p>
// // // //               <SignInButton mode="modal" afterSignInUrl="/dashboard" />
// // // //             </div>
// // // //           </SignedOut>

// // // //           {/* SignedIn Section */}
// // // //           <SignedIn>
// // // //             <div className="user-bar">
// // // //               <UserButton />
// // // //             </div>
// // // //           </SignedIn>

// // // //           {/* Main App Content */}
// // // //           <LoadingWrapper>
// // // //             <CartProvider>{children}</CartProvider>
// // // //           </LoadingWrapper>

// // // //           {/* Footer */}
// // // //           <Footer />
// // // //         </body>
// // // //       </html>
// // // //     </ClerkProvider>
// // // //   );
// // // // }

import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Metadata } from 'next';
import CartProvider from './components/layout/Providers'; // Import your Cart provider
import Footer from './components/layout/Footer'; // Import your Footer component
import LoadingWrapper from './components/layout/loadingwrapper'; // Import the Loading Wrapper component

import './globals.css'; // Import global CSS

// Define custom fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Aura - Elevate Your Fashion',
  description: 'Discover Aura – Elevate your fashion with our exclusive range of stylish, high-quality clothing.',
  keywords: 'aura, fashion, online store, clothing',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
     

          <LoadingWrapper>
            <CartProvider>{children}</CartProvider>
          </LoadingWrapper>

          <Footer /> {/* Footer component */}
        </body>
      </html>
    </ClerkProvider>
  );
}

