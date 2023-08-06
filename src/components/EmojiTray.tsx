import React, { useEffect, useState } from 'react';
import emojiPickerStyles from '../styles/EmojiTray.module.css';
import EmojiBox from './EmojiBox';
import { Auth } from 'aws-amplify';

const EmojiPicker = () => {
   const [selectedEmoji, setSelectedEmoji] = useState('');
   const [username, setUsername] = useState('');

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const user = await Auth.currentAuthenticatedUser();
            setUsername(user.signInUserSession.idToken.payload.email.split('@')[0]);
         } catch (error) {
            console.error('Error fetching user data:', error);
         }
      };
      fetchUserData();
   }, []);

   const emojiTrayBoxes = [
      {
         key: 0,
         emoji: '😁',
         text: 'Happy',
      },
      {
         key: 1,
         emoji: '😌',
         text: 'Relaxed',
      },
      {
         key: 2,
         emoji: '😐',
         text: 'Neutral',
      },
      {
         key: 3,
         emoji: '😕',
         text: 'Sad',
      },
      {
         key: 4,
         emoji: '😠',
         text: 'Angry',
      },
   ];

   return (
      <div>
         <div className={emojiPickerStyles.greeting}>Hi, {username}</div>
         <div className={emojiPickerStyles.question}>How are you feeling today?</div>
         <div className={emojiPickerStyles.emojiTray}>
            {emojiTrayBoxes.map((emojiTrayBox) => (
               <EmojiBox
                  emoji={emojiTrayBox.emoji}
                  text={emojiTrayBox.text}
                  key={emojiTrayBox.key}
                  selectedEmoji={selectedEmoji}
                  setSelectedEmoji={setSelectedEmoji}
               />
            ))}
         </div>
      </div>
   );
};

export default EmojiPicker;
