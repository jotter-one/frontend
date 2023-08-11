/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import navbarStyles from '../styles/Navbar.module.css';
import logo from '../../public/logo.png';
import profilePic from '../../public/profilepic.jpg';
import Link from 'next/link';

const navigation = [
   { name: 'Home', href: '/' },
   { name: 'Wealth Manager', href: '/wealth' },
   { name: 'Marketplace', href: '/marketplace' },
];

const Navbar = () => {
   return (<nav className={navbarStyles.navBar}>
      <div className={navbarStyles.hamburgerMenu}>Menu</div>
      <Image src={logo} alt='logo' className={navbarStyles.logo} />
      <div className={navbarStyles.navLinks}>
         {navigation.map((link)=>{
            return (<Link key={link.name} href={link.href} className={navbarStyles.navLink}>{link.name}</Link>)
         })}
      </div>
      <Image quality={100} src={profilePic} alt='profilepic' className={navbarStyles.profilePic} />
   </nav>)
}


export default  Navbar;

