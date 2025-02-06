// // app/cart/page.tsx
// import { auth } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';

// export default function Checkauth() {
//     const { userId } = auth();

//     // Redirect to sign-in if not authenticated
//     if (!userId) {
//         redirect('/sign-in');
//     }
// }
// components/AuthGuard.tsx
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthGuardProps {
  children: React.ReactNode;  // The content to be protected
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { userId, isLoaded } = useAuth();  // Get user authentication state
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;  // Wait until the authentication state is loaded
    if (!userId) {
      router.push('/sign-in');  // Redirect to sign-in page if not authenticated
    }
  }, [userId, isLoaded, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;  // Optionally, show a loading state while checking authentication
  }

  // Render the children (protected content) if authenticated
  return <>{children}</>;
};

export default AuthGuard;
