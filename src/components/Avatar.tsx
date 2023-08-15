import Image from 'next/image';
import profilePic from '../../public/profilepic.jpg';
import avatarStyles from '../styles/Avatar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

type avatarProps = {
   customAvatarStyles?: {
      avatar: string;
      avatarImg: string;
   };
   customAvatarOptionsStyles?: {
      optionsBox: string;
      option: string;
   };
   customParams?: {
      hamburgerClicked?: boolean;
   };
};

const Avatar = (props: avatarProps) => {
   const [avatarClicked, setAvatarClicked] = useState(false);
   const { customAvatarStyles, customAvatarOptionsStyles, customParams } = props;
   const router = useRouter();
   const logOut = async () => {
      try {
         await Auth.signOut();
         console.log('User logged out');
      } catch (error) {
         console.error('Error signing out:', error);
      }
   };
   const goToProfile = () => {
      customParams?.hamburgerClicked ? router.push('/profile') : null;
   };

   return (
      <div className={` ${avatarStyles.avatar} ${customAvatarStyles?.avatar}`}>
         <Image
            quality={100}
            src={profilePic}
            alt='profilepic'
            className={`${avatarStyles.avatarImg} ${customAvatarStyles?.avatarImg}`}
            onClick={() => {
               setAvatarClicked(!avatarClicked);
               goToProfile();
            }}
         />
         <div
            className={`${
               avatarClicked ? avatarStyles.avatarClickedOptionsBox : avatarStyles.avatarNotclickedOptionsBox
            } ${avatarStyles.optionsBox} ${customAvatarOptionsStyles?.optionsBox}`}
         >
            <Link
               href='/profile'
               className={`${avatarClicked ? avatarStyles.avatarClickedOption : avatarStyles.avatarNotclickedOption} ${
                  avatarStyles.option
               } ${customAvatarOptionsStyles?.option}`}
            >
               Profile
            </Link>
            <div
               onClick={() => logOut()}
               className={`${avatarClicked ? avatarStyles.avatarClickedOption : avatarStyles.avatarNotclickedOption} ${
                  avatarStyles.option
               } ${customAvatarOptionsStyles?.option}`}
            >
               Log Out
            </div>
         </div>
      </div>
   );
};

export default Avatar;
