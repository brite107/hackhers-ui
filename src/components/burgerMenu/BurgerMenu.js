import React, { useState } from 'react';
import SideDrawer from '../sideDrawer/SideDrawer';
import { BurgerMenuWrapper, BurgerLine } from './style';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <BurgerMenuWrapper open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <BurgerLine open={isOpen}></BurgerLine>
                <BurgerLine open={isOpen}></BurgerLine>
                <BurgerLine open={isOpen}></BurgerLine>
            </BurgerMenuWrapper>
            <SideDrawer />
        </div>
    )
}

export default BurgerMenu;
