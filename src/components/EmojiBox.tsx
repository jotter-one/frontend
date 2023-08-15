import { Dispatch, SetStateAction } from 'react';
import emojiBoxStyles from '../styles/EmojiBox.module.css';

type emojiBoxParams = {
   emoji: string;
   text: string;
   selectedEmoji: string;
   setSelectedEmoji: Dispatch<SetStateAction<string>>;
};

const EmojiBox = (params: emojiBoxParams) => {
   const { emoji, text, selectedEmoji, setSelectedEmoji } = params;

   return (
      <div
         className={`${emojiBoxStyles.emojiBox} ${
            selectedEmoji === emoji ? emojiBoxStyles.emojiBoxSelected : emojiBoxStyles.emojiBoxNotSelected
         }`}
         onClick={() => {
            setSelectedEmoji(emoji);
         }}
      >
         <div
            className={`${emojiBoxStyles.emoji} ${
               selectedEmoji === emoji ? emojiBoxStyles.emojiSelected : emojiBoxStyles.emojiNotSelected
            }`}
         >
            {emoji}
         </div>
         <div className={emojiBoxStyles.text}>{text}</div>
      </div>
   );
};

export default EmojiBox;
