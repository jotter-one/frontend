import EmojiPicker from '@/components/Emoji'
import Diary from '../components/Diary'
import Head from 'next/head'
export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 '>
               {' '}
               <Diary />
            </div>
            <div className='col-span-1 '>
               <div className='bg-white shadow rounded-md p-4'>
                  <EmojiPicker />
               </div>
            </div>
         </div>
      </>
   )
}
