/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import navbarStyles from '../styles/Navbar.module.css';
import logo from '../../public/logo.png';
import profilePic from '../../public/profilepic.jpg';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

const navigation = [
   { name: 'Home', href: '/' },
   { name: 'Wealth Manager', href: '/wealth' },
   { name: 'Marketplace', href: '/marketplace' },
];

const Navbar = () => {
   const [isClicked, setIsClicked] = useState(false);
   return (
      <nav
         className={`${navbarStyles.navBar} ${isClicked ? navbarStyles.navBarClicked : navbarStyles.navBarNotClicked}`}
      >
         <div className={navbarStyles.hamburgerMenu}>
            <HamburgerMenu clicked={isClicked} onClick={setIsClicked} />{' '}
         </div>
         <Image src={logo} alt='logo' className={`${navbarStyles.logo} ${isClicked?navbarStyles.logoClicked:navbarStyles.logoNotClicked}`} />
         <div className={`${navbarStyles.navLinks} ${isClicked?navbarStyles.navLinksClicked: navbarStyles.navLinksNotClicked}`}>
            {navigation.map((link) => {
               return (
                  <Link key={link.name} href={link.href} className={`${navbarStyles.navLink} ${isClicked?navbarStyles.navLinkClicked:navbarStyles.navLinkNotClicked}`}>
                     {link.name}
                  </Link>
               );
            })}
         </div>
         <Image quality={100} src={profilePic} alt='profilepic' className={`${navbarStyles.profilePic} ${isClicked? navbarStyles.profilePicClicked: navbarStyles.profilePicNotClicked}`} />
      </nav>
   );
};

export default Navbar;
