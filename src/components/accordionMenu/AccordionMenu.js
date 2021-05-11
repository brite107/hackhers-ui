import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #000000;
  justify-content: space-between;
  border-bottom: .25px solid black;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  cursor: pointer;
`;

const DropdownLink = styled(Link)`
  background: #fff;
  height: 60px;
  padding-left: 3rem;
  border-bottom: .25px solid black;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  &:hover {
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const AccordionLink = styled(Link)`
background: #fff;
  height: 60px;
  padding-left: 3rem;
  border-bottom: .25px solid black;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  &:hover {
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const AccordionMenu = ({ item, onClick }) => {
  const [subnav, setSubnav] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const showSubMenu = () => setSubmenu(!submenu)

  return (
    <>
      <SidebarLink to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          <SidebarLabel>
            {item.title}
          </SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((subItem, index) => {
          return (
            <div>
              <DropdownLink key={index}
                onClick={subItem.subMenu && showSubMenu}
              >
                <div>
                  <SidebarLabel>
                    {subItem.title}
                  </SidebarLabel>
                </div>
                <div>
                  {subItem.subMenu && submenu
                    ? subItem.iconOpened
                    : subItem.subMenu
                      ? subItem.iconClosed
                      : null}
                </div>
              </DropdownLink>
              {submenu &&
                subItem.subMenu.map((subItems, index) => {
                  return (
                    <AccordionLink to={subItems.path}
                      key={index}
                      onClick={onClick}
                    >
                      <SidebarLabel>
                        {subItems.title}
                      </SidebarLabel>
                    </AccordionLink>
                  );
                })}
            </div>
          );
        })
      }
    </>
  );
};

export default AccordionMenu;