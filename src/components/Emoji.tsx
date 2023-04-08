import React, { useState } from 'react'
import emojiData from 'emojilib'
import styles from '../styles/Emoji.module.css'

const EmojiPicker = () => {
   // State to keep track of the selected emoji
   const [selectedEmoji, setSelectedEmoji] = useState<string[]>([])

   // Function to handle when an emoji is clicked
   const handleEmojiClick = (emoji: string) => {
      setSelectedEmoji((prev) => {
         return [...prev, emoji]
      })
   }

   return (
      <div className={styles.emoji__picker}>
         {/* Display the selected emoji */}
         <div className={styles.selected__emojis}>
            {selectedEmoji.map((emoji, i) => {
               return (
                  <div key={i} className={styles.selected__emoji}>
                     {emoji}
                  </div>
               )
            })}
         </div>

         <div className={styles.emoji__list}>
            {Object.keys(emojiData)
               .slice(0, 30)
               .map((emoji) => (
                  <span key={emoji} onClick={() => handleEmojiClick(emoji)} className={styles.emoji__item}>
                     {emoji}
                  </span>
               ))}
         </div>
      </div>
   )
}

export default EmojiPicker
