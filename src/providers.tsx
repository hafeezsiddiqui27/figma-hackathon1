// app/providers.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";


export default function ClerkProviders({ children }: { children: React.ReactNode }) {
    return (
       /* @ts-ignore */
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}
