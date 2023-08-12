import { Dispatch, SetStateAction } from 'react';
import hamburgerMenuStyles from '../styles/HamburgerMenu.module.css'

type hamburgerMenuProps = {
    clicked : boolean,
    onClick: Dispatch<SetStateAction<boolean>>
}

const HamburgerMenu = (props:hamburgerMenuProps) => {
    const {clicked, onClick} = props;
    return (<div>
        <div className={hamburgerMenuStyles.hamburgerMenu} onClick={()=>onClick(!clicked)}>
            <div className={`${hamburgerMenuStyles.hamburgerMenu_line} ${clicked?hamburgerMenuStyles.hamburgerMenu_lineClicked:hamburgerMenuStyles.hamburgerMenu_lineNotClicked}`}></div>
            <div className={`${hamburgerMenuStyles.hamburgerMenu_line} ${clicked?hamburgerMenuStyles.hamburgerMenu_lineClicked:hamburgerMenuStyles.hamburgerMenu_lineNotClicked}`}></div>
            <div className={`${hamburgerMenuStyles.hamburgerMenu_line} ${clicked?hamburgerMenuStyles.hamburgerMenu_lineClicked:hamburgerMenuStyles.hamburgerMenu_lineNotClicked}`}></div>
        </div>
    </div>)
}

export default HamburgerMenu;