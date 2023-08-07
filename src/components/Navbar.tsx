import Link from 'next/link';
import navBarStyles from '../styles/NavBar.module.css';
import ProfileIcon from './ProfileIcon';

const NavBar = () => {
   const navigationLinks = [
      {
         key: 0,
         name: 'Diary',
         link: '/',
      },
      {
         key: 1,
         name: 'Wealth Manager',
         link: '/',
      },
      {
         key: 2,
         name: 'Extensions',
         link: '/',
      },
   ];
   return (
      <nav className={navBarStyles.navBar}>
         <div className={navBarStyles.logoAndLinks}>
            <div className={navBarStyles.logo}>
               <div className={navBarStyles.jotterLogo}>Jotter</div>
            </div>
            <div className={navBarStyles.links}>
               {navigationLinks.map((link) => (
                  <Link href={link.link} key={link.key} className={navBarStyles.link}>
                     {link.name}
                  </Link>
               ))}
            </div>
         </div>
         <div>
            <ProfileIcon />
         </div>
      </nav>
   );
};

export default NavBar;
