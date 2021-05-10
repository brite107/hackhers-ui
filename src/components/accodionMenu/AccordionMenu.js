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

const AccordionMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
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
        item.subNav.map((item, index) => {
          return (
            <DropdownLink key={index}>
              <div>
              <SidebarLabel>{item.title}</SidebarLabel>
              </div>
              <div>
                {item.subNav && !subnav
                  ? item.iconOpened
                  : item.subNav
                    ? item.iconClosed
                    : null}
              </div>
            </DropdownLink>
          );
        })
      }
    </>
  );
};

export default AccordionMenu;