import Diary from '../components/Diary';
import Head from 'next/head';

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <div>
            <Diary />
         </div>
      </>
   );
}
