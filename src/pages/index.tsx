import EmojiPicker from '@/components/Emoji'
import Diary from '../components/Diary'
import Head from 'next/head'

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-6 gap-4'>
            <div className='col-span-2 lg:col-span-2 md:col-span-3'>
               <Diary />
            </div>
            <div className='col-span-1 lg:col-span-1 md:col-span-3 sm:w-full sm:flex-col'>
               <div className='bg-white shadow rounded-md p-4'>
                  <EmojiPicker />
               </div>
            </div>
         </div>
      </>
   )
}
