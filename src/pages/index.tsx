import Diary from '../components/Diary'
export default function Home() {
   return (
      <>
         <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 '>
               {' '}
               <Diary />
            </div>
            <div className='col-span-1 '>Column 2</div>
         </div>
      </>
   )
}
