// app/components/UserNav.tsx
import { UserButton } from "@clerk/nextjs";
import {auth } from "@clerk/nextjs/server";

export default function UserNav() {
  const { userId } = auth();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <h1 className="text-xl font-bold">My Clerk App</h1>
      {userId ? <UserButton afterSignOutUrl="/" /> : null}
    </nav>
  );
}
