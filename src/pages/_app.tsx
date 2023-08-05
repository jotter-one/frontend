import '@/styles/globals.css';
import '../styles/stylepalette.css';
import type { AppProps } from 'next/app';
import awsExports from '../aws-exports';
import { Amplify } from 'aws-amplify';
import { ConfigProvider } from 'antd'; // Import the ConfigProvider
import theme from '../theme/themeConfig'; // Import your custom theme
import Navbar from '@/components/Navbar';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import ProtectedRoute from '@/util/auth';

Amplify.configure({ ...awsExports, ssr: true });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ConfigProvider theme={theme}>
      {Component.getLayout ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Navbar />
          <div className='mx-auto w-full pt-6 px-2 sm:px-6 lg:px-8 mt-16'>
            <Component {...pageProps} />
          </div>
        </ProtectedRoute>
      )}
    </ConfigProvider>
  );
}
