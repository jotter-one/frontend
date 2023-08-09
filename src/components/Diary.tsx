import { useState } from 'react';
import styles from '../styles/Diary.module.css';
function NotebookPaperTextarea() {
   const [value, setValue] = useState('');

   function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setValue(event.target.value);
      event.target.style.height = 'auto';
      event.target.style.height = event.target.scrollHeight + 'px';
   }

   return (
      <div className='rounded-sm p-1'>
         <div className='h-2 rounded-t-md'></div>
         <div className='relative'>
            <textarea
               className={`bg-transparent border-none focus:outline-none w-full resize-none ${styles.text__area}`}
               rows={5}
               value={value}
               onChange={handleChange}
               spellCheck='false'
            ></textarea>
         </div>
      </div>
   );
}

export default NotebookPaperTextarea;
