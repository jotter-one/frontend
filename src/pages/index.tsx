import React, { useState } from 'react';
import Diary from '../components/Diary';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import EmojiTray from '@/components/EmojiTray';
import faceEmojis from '../util/emojis';
import { DatePicker, Tag } from 'antd';

export default function Home() {
   const [selectedDate, setSelectedDate] = useState<Date>(new Date());

   const handleEmojiSelection = (selectedEmoji: string) => {
      console.log('Selected Emoji:', selectedEmoji);
      // Do something with the selected emoji (e.g., store in state)
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
               <Tag color='green' style={{ padding: '0 10px 0 10px' }}>
                  <p className={styles.date}>{renderDateLabel()}</p>
               </Tag>

               <DatePicker
                  className={styles.datePicker}
                  onChange={(date) => {
                     console.log('Selected Date:', date);
                     setSelectedDate(date ? date.toDate() : new Date());
                  }}
               />
            </div>
            <br />

            <p className={styles.name}>Hi, Pamuditha</p>
            <br />
            <p className={styles.feeling}>How are you feeling today?</p>

            <EmojiTray emojis={faceEmojis} onSelect={handleEmojiSelection} />

            <br />
            <br />

            <Diary />
         </div>
      </>
   );
}
