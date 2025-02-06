// // middleware.ts
// import { clerkMiddleware } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// export default clerkMiddleware((req) => {
//   return NextResponse.next();
// });

// // Avoid running middleware on static files or specific paths
// export const config = { matcher: '/((?!_next/image|_next/static|favicon.ico).*)' };
import { clerkMiddleware } from "@clerk/nextjs/server";

// Apply Clerk middleware directly
export default clerkMiddleware();

// Ensure middleware applies to all routes except static files
export const config = { matcher: "/((?!_next/static|_next/image|favicon.ico).*)" };
