import React, { useState } from 'react';
import styles from '../../src/styles/EmojiContainerLogin.module.css'; // Import CSS module

const EmojiPopupComponent = () => {
   const emojis = ['🚀', '😍', '😊', '🎉', '🍔'];
   const [hoveredIndex, setHoveredIndex] = useState(2);

   const handleEmojiHover = (index: number) => {
      setHoveredIndex(index);
   };

   return (
      <div className={styles.emojiContainer}>
         {emojis.map((emoji, index) => (
            <span
               key={index}
               className={`${styles.emoji} ${hoveredIndex === index ? styles.hovered : ''}`}
               onMouseEnter={() => handleEmojiHover(index)}
            >
               {emoji}
            </span>
         ))}
      </div>
   );
};

export default EmojiPopupComponent;
