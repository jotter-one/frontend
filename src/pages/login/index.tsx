import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import { ReactNode } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { withSSRContext } from 'aws-amplify';
import { Button } from 'antd';
import styles from '../../styles/Login.module.css';
import EmojiPopupComponent from '@/components/EmojiPopup';
import { Typewriter } from 'react-simple-typewriter';

type Props = {};

export default function Login() {
   const handleGoogleLogin = () => {
      Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
   };

   return (
      <div className={styles.mainContainer}>
         <div className={styles.leftContainer}>
            <p className={styles.logoName}> 📒 Jotter</p>
            <div>
               <EmojiPopupComponent />
               <br />
               <br />
               <span className={styles.animatedTyping}>
                  <Typewriter
                     words={['Your digital diary.', 'Manage your wealth.']}
                     loop={false}
                     cursor
                     cursorStyle='|'
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={1000}
                  />
               </span>
               <br />
            </div>
         </div>
         <div className={styles.rightContainer}>
            <Button
               onClick={handleGoogleLogin}
               icon={<FcGoogle style={{ color: 'blue' }} />}
               className={styles.googleButton}
            >
               Sign in with Google
            </Button>
            <Button
               onClick={handleGoogleLogin}
               icon={<FaFacebook style={{ color: 'blue' }} />}
               className={styles.facebookButton}
            >
               Sign in with Facebook
            </Button>
         </div>
      </div>
   );
}

Login.getLayout = function PageLayout(page: ReactNode) {
   return <>{page}</>;
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
