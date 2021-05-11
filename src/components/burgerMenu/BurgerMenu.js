import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import AccordionMenu from '../accordionMenu/AccordionMenu';
import { IconContext } from 'react-icons/lib';
import { SidebarData } from './SidebarData'

const Nav = styled.div`
  display: flexbox;
  justify-content: right;
  align-items: center;
`;

const NavIcon = styled(Link)`
  font-size: 2rem;
  display: flex;
  justify-content: right;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: .25em;

  @media screen and (min-width: 1200px) {
      display: none;
  }
`;

const SidebarNav = styled.nav`
  background: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 2.80em;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

  @media screen and (max-width: 960px) {
      top: 2.75em;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function BurgerMenu() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#000000' }}>
                <Nav>
                    <NavIcon to='#'>
                        {!sidebar ?
                            <FaIcons.FaBars onClick={showSidebar} /> :
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        }
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        {SidebarData.map((item, index) => {
                            return <AccordionMenu item={item} key={index} onClick={showSidebar} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default BurgerMenu;