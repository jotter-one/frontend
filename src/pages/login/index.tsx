import { FcGoogle } from 'react-icons/fc';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import { ReactNode } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { withSSRContext } from 'aws-amplify';
import {Button} from "antd";

type Props = {};
export default function Login() {
   const handleGoogleLogin = () => {
      Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
   };
   return (
      <>
         <Head>
            <title>Jotter</title>
         </Head>
         <div className='flex h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
            <div className='w-full max-w-md space-y-8'>
               <div>
                  <h1 className='mt-6 text-center text-4xl font-bold tracking-tight text-gray-900'>Jotter</h1>
               </div>

               <div style={{ boxSizing: 'border-box', width: '50', height: '100px' }}>
                  <Button
                     onClick={handleGoogleLogin}
                     className='group relative flex items-center w-full justify-center rounded-sm'
                  >
                     <FcGoogle className='h-5 w-5 mr-2' aria-hidden='true' />
                     <span className='text-1xl font-bold'>Sign in with Google</span>
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
}

Login.getLayout = function PageLayout(page: ReactNode) {
   return <> {page}</>;
};


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
   const { Auth } = withSSRContext(context);
   try {
      await Auth.currentAuthenticatedUser();
      return {
         redirect: {
            source: '/login',
            destination: '/',
            permanent: false,
         },
      };
   } catch (err) {
   
      return {
         props: {},
      };
   }
};
