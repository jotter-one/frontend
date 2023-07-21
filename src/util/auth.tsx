import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';

type ProtectedRouteProps = {
   children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
   const router = useRouter();
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
      async function checkAuth() {
         try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
         } catch {
            router.push('/login');
         }
      }

      checkAuth();
   }, [router]);

   if (!isAuthenticated) {
      return null;
   }

   return <div className='protected-component'>{children}</div>;
}
