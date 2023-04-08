import React, { useState } from 'react'
import emojiData from 'emojilib'
import styles from '../styles/Emoji.module.css'
const EmojiPicker = () => {
   // State to keep track of the selected emoji
   const [selectedEmoji, setSelectedEmoji] = useState(null)

   // Function to handle when an emoji is clicked
   const handleEmojiClick = (emoji) => {
      console.log(emoji)
      setSelectedEmoji(emoji)
   }
   return (
      <div className={styles.emoji__picker}>
         {/* Display the selected emoji */}
         <div className={styles.selected__emoji}>{selectedEmoji}</div>
         {/* Display the list of emojis */}
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
