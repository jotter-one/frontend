import Diary from '../components/Diary';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import EmojiPopupComponent from '@/components/EmojiPopup';
import EmojiTray from '@/components/EmojiTray';
import faceEmojis from '../util/emojis';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useState } from 'react';

export default function Home() {
   const [selectedDate, setSelectedDate] = useState(new Date());

   const handleEmojiSelection = (selectedEmojis) => {
      console.log('Selected Emojis:', selectedEmojis);
      // Do something with the selected emojis (e.g., store in state)
   };

   const renderDateLabel = () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      const selectedDateObj = new Date(selectedDate); // Convert selectedDate to Date object

      if (selectedDateObj.toDateString() === today.toDateString()) {
         return 'Today';
      } else if (selectedDateObj.toDateString() === tomorrow.toDateString()) {
         return 'Tomorrow';
      } else if (selectedDateObj.toDateString() === yesterday.toDateString()) {
         return 'Yesterday';
      } else {
         return selectedDateObj.toLocaleDateString('en-US', { weekday: 'long' });
      }
   };

   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <div>
            <div className={styles.dateContainer}>
               <p className={styles.date}>{renderDateLabel()}</p>

               <DatePicker
                  className={styles.datePicker}
                  onChange={(date) => {
                     console.log('Selected Date:', date);
                     setSelectedDate(date);
                  }}
               />
            </div>
            <br></br>

            <p className={styles.name}>Hi, Pamuditha</p>
            <br></br>
            <p className={styles.feeling}>How are you feeling today?</p>

            <EmojiTray emojis={faceEmojis} onSelect={handleEmojiSelection} />
            <br></br>
            <br></br>

            <Diary />
         </div>
      </>
   );
}
