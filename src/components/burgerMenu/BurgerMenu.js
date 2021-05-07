import React from 'react';
import {FaBars} from 'react-icons/fa';
import SideDrawer from '../sideDrawer/SideDrawer';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <FaBars open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <SideDrawer />
            </FaBars>
        </div>
    )
}

export default BurgerMenu
