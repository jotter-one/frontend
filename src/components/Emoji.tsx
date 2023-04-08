import React, { useState } from 'react'
import emojiData from 'emojilib'
import styles from '../styles/Emoji.module.css'

const EmojiPicker = () => {
   // State to keep track of the selected emoji
   const [selectedEmoji, setSelectedEmoji] = useState<string[]>([])

   // Function to handle when an emoji is clicked
   const handleEmojiClick = (emoji: string) => {
      setSelectedEmoji((prev) => {
         // Check if the emoji is already selected
         const isSelected = prev.includes(emoji)

         if (isSelected) {
            // If the emoji is already selected, remove it from the array
            return prev.filter((e) => e !== emoji)
         } else {
            // If the emoji is not already selected, add it to the array
            return [...prev, emoji]
         }
      })
   }

   return (
      <div className={styles.emoji__picker}>
         <div className={styles.emoji__list}>
            {Object.keys(emojiData)
               .slice(0, 30)
               .map((emoji) => {
                  const isSelected = selectedEmoji.includes(emoji)

                  return (
                     <span
                        key={emoji}
                        className={`${styles.emoji__item} ${isSelected ? styles.selected : ''}`}
                        onClick={() => handleEmojiClick(emoji)}
                     >
                        {emoji}
                     </span>
                  )
               })}
         </div>
      </div>
   )
}

export default EmojiPicker
