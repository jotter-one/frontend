import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';
import Avatar from './Avatar';
import { Auth } from 'aws-amplify';
import navbarStyles from '../styles/NavBar.module.css';

const navigation = [
   { name: 'Home', href: '/' },
   { name: 'Wealth Manager', href: '/wealth' },
   { name: 'Marketplace', href: '/marketplace' },
];

const Navbar = () => {
   const [isClicked, setIsClicked] = useState(false);

   const logOut = async () => {
      try {
         await Auth.signOut();
         console.log('User logged out');
      } catch (error) {
         console.error('Error signing out:', error);
      }
   };

   const avatarStyles = {
      avatar: `${isClicked ? navbarStyles.avatarClicked : navbarStyles.avatarNotClicked}`,
      avatarImg: `${isClicked ? navbarStyles.avatarImgClicked : navbarStyles.avatarImgNotClicked}`,
   };

   const optionsStyles = {
      optionsBox: `${isClicked ? navbarStyles.optionsBoxClicked : navbarStyles.optionsBoxNotClicked}`,
      option: `${isClicked ? navbarStyles.optionClicked : navbarStyles.optionNotClicked}`,
   };

   const customParams = {
      hamburgerClicked: isClicked,
   };
   return (
      <nav
         className={`${navbarStyles.navBar} ${isClicked ? navbarStyles.navBarClicked : navbarStyles.navBarNotClicked}`}
      >
         <div className={navbarStyles.hamburgerMenu}>
            <HamburgerMenu clicked={isClicked} onClick={setIsClicked} />{' '}
         </div>
         <Image
            src={logo}
            alt='logo'
            className={`${navbarStyles.logo} ${isClicked ? navbarStyles.logoClicked : navbarStyles.logoNotClicked}`}
         />
         <div
            className={`${navbarStyles.navLinks} ${
               isClicked ? navbarStyles.navLinksClicked : navbarStyles.navLinksNotClicked
            }`}
         >
            {navigation.map((link) => {
               return (
                  <Link
                     key={link.name}
                     href={link.href}
                     className={`${navbarStyles.navLink} ${
                        isClicked ? navbarStyles.navLinkClicked : navbarStyles.navLinkNotClicked
                     }`}
                     onClick={() => {
                        setIsClicked(false);
                     }}
                  >
                     {link.name}
                  </Link>
               );
            })}
            <div
               onClick={() => logOut()}
               className={`${navbarStyles.navLinkLogOut} ${
                  isClicked ? navbarStyles.navLinkLogOutClicked : navbarStyles.navLinkLogOutNotClicked
               }`}
            >
               Log Out
            </div>
         </div>
         <Avatar
            customAvatarStyles={avatarStyles}
            customAvatarOptionsStyles={optionsStyles}
            customParams={customParams}
         />
      </nav>
   );
};

export default Navbar;
