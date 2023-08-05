import Image from 'next/image';
import profileIconStyle from '../styles/ProfileIcon.module.css';
import Link from 'next/link';
import avatar from '../../public/avatar.svg';

const ProfileIcon = () => {
    return (<Link href="/">
        <Image src={avatar} alt="Profile Icon"  className={profileIconStyle.background}/>
    </Link>)
}

export default ProfileIcon;