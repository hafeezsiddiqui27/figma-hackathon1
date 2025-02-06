// // app/components/UserButton.tsx
// import { UserButton } from '@clerk/nextjs';

// export default function UserButtonComponent() {
//   return <UserButton afterSignOutUrl="/" />;
// }// app/components/UserButton.tsx
import { UserButton, useUser } from '@clerk/nextjs';

export default function UserButtonComponent() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // Show loading while checking user status
  }

  return (
    <div>
      {isSignedIn ? (
        <div>
          <UserButton afterSignOutUrl="/" />
          <p>Welcome, {user?.firstName}!</p>
        </div>
      ) : (
        <p>Please sign in to access your account.</p>
      )}
    </div>
  );
}
