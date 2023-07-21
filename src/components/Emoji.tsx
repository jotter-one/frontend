import React, { useState } from 'react';
import emojiData from 'emojilib';
import styles from '../styles/Emoji.module.css';

const EmojiPicker = () => {
   const [selectedEmoji, setSelectedEmoji] = useState<string[]>([]);

   const handleEmojiClick = (emoji: string) => {
      setSelectedEmoji((prev) => {
         const isSelected = prev.includes(emoji);

         if (isSelected) {
            return prev.filter((e) => e !== emoji);
         } else {
            return [...prev, emoji];
         }
      });
   };

   return (
      <div className={styles.emoji__picker}>
         <div className={styles.emoji__list}>
            {Object.keys(emojiData)
               .slice(0, 30)
               .map((emoji) => {
                  const isSelected = selectedEmoji.includes(emoji);

                  return (
                     <span
                        key={emoji}
                        className={`${styles.emoji__item} ${isSelected ? styles.selected : ''}`}
                        onClick={() => handleEmojiClick(emoji)}
                     >
                        {emoji}
                     </span>
                  );
               })}
         </div>
      </div>
   );
};

export default EmojiPicker;
