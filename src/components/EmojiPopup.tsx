import styles from '../../src/styles/EmojiContainerLogin.module.css'; // Import CSS module

const EmojiPopupComponent = () => {
   const emojis = ['😀', '😍', '🚀', '🎉', '🍔'];

   return (
      <div className={styles.emojiContainer}>
         {emojis.map((emoji, index) => (
            <span key={index} className={styles.emoji}>
               {emoji}
            </span>
         ))}
      </div>
   );
};

export default EmojiPopupComponent;
