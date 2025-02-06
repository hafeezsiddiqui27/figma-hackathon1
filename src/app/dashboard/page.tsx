import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in"); // Redirect unauthenticated users
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard!</h1>
    </div>
  );
}
