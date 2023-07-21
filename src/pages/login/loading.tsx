export default function Loading() {
   return (
      <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-gray-800 z-50'>
         <div className='animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12'></div>
      </div>
   );
}
