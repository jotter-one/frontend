import React, { useState } from 'react';
import styles from '../styles/EmojiTray.module.css';

interface Emoji {
   key: string;
   emoji: string;
   name: string;
}

interface EmojiTrayProps {
   emojis: Emoji[];
   onSelect: (emoji: string) => void;
}

const EmojiTray: React.FC<EmojiTrayProps> = ({ emojis, onSelect }) => {
   const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);

   const handleEmojiClick = (emoji: string) => {
      if (selectedEmojis.includes(emoji)) {
         setSelectedEmojis(selectedEmojis.filter((e) => e !== emoji));
      } else {
         setSelectedEmojis([...selectedEmojis, emoji]);
      }
   };

   return (
      <div className={styles.emojiTray}>
         {emojis.map(({ key, emoji, name }) => (
            <button
               key={key}
               className={`${styles.emoji} ${selectedEmojis.includes(emoji) ? styles.selected : ''}`}
               onClick={() => {
                  handleEmojiClick(emoji);
                  onSelect(emoji);
               }}
            >
               <span role='img' aria-label={name}>
                  {emoji}
               </span>
            </button>
         ))}
      </div>
   );
};

export default EmojiTray;
