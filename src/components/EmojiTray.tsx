import React, { useState } from 'react';
import emojiPickerStyles from '../styles/EmojiTray.module.css';
import EmojiBox from './EmojiBox';

const EmojiPicker = () => {
   const [selectedEmoji, setSelectedEmoji] = useState('');
   
   const emojiTrayBoxes = [
      {
         key: 0,
         emoji: '😁',
         text: 'Happy'
      },{
         key: 1,
         emoji: '😌',
         text: 'Relaxed'
      },{
         key: 2,
         emoji: '😐',
         text: 'Neutral'
      },{
         key: 3,
         emoji: '😕',
         text: 'Sad'
      },{
         key: 4,
         emoji: '😠',
         text: 'Angry'
      }
   ]

   return (<div>
      <div className={emojiPickerStyles.greeting}>Hi Pamuditha</div>
      <div className={emojiPickerStyles.question}>How are you feeling today?</div>
      <div className={emojiPickerStyles.emojiTray}>
         {emojiTrayBoxes.map((emojiTrayBox)=>(
            <EmojiBox emoji={emojiTrayBox.emoji} text={emojiTrayBox.text} key={emojiTrayBox.key} selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji}/>
         ))}
      </div>
   </div>
   );
};

export default EmojiPicker;
