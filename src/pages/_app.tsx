/* eslint-disable @typescript-eslint/ban-types */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

Amplify.configure({ ...awsExports, ssr: true })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
   getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
   if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />)
   }
   return (
      <>
         <Navbar />
         <Component {...pageProps} />
      </>
   )
}
