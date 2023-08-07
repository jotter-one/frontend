import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import emojiBoxStyles from '../styles/EmojiBox.module.css';
import { Auth } from 'aws-amplify';

type emojiBoxParams = {
   emoji: string;
   text: string;
   selectedEmoji: string;
   setSelectedEmoji: Dispatch<SetStateAction<string>>;
};

const EmojiBox = (params: emojiBoxParams) => {
   const { emoji, text, selectedEmoji, setSelectedEmoji } = params;

   const logOut = async()=>{
      try {
         await Auth.signOut();
      } catch (error) {
      console.log('error signing out: ', error);
      }
   }

   return (
      <div
         className={`${emojiBoxStyles.emojiBox} ${
            selectedEmoji === emoji ? emojiBoxStyles.emojiBoxSelected : emojiBoxStyles.emojiBoxNotSelected
         }`}
         onClick={() => {
            setSelectedEmoji(emoji);
            logOut()
         }}
      >
         <div className={emojiBoxStyles.emoji}>{emoji}</div>
         <div className={emojiBoxStyles.text}>{text}</div>
      </div>
   );
};

export default EmojiBox;
