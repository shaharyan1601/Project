import React, { useState } from "react";
import "./leftInvonav.css";
import Submenu from "./Submenu";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f1f1f1;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

function LeftInfoNavWithSubMenu({ navOptions, activeIdx, setActiveIdx }) {
  const [expandedItems, setExpandedItems] = useState({});

  const handleToggleSubMenu = (id) => {
    setExpandedItems((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  const MenuItem = ({ id, title, icon, subNav }) => {
    const isSubMenuVisible = expandedItems[id];

    const handleToggle = () => {
      if (id !== activeIdx) {
        setActiveIdx(id);
      }
      handleToggleSubMenu(id);
      console.log(id);
    };

    return (
      <>
        <li
          onClick={handleToggle}
          className={`${id === activeIdx ? "infoNav-section-active" : ""}`}
        >
          <span>{title}</span>
          {icon && <span>{icon}</span>}
        </li>
        {isSubMenuVisible && (
          <ul>
            {subNav?.map((subMenuItem, index) =>
              renderMenu(subMenuItem, index)
            )}
          </ul>
        )}
      </>
    );
  };

  const renderMenu = (menuData, index) => (
    <MenuItem
      key={index}
      id={menuData.id}
      title={menuData.title}
      icon={menuData.icon}
      subNav={menuData.subNav}
    />
  );

  return (
    <div className="leftInfoNavContainer">
      <ul>
        {navOptions.map((menuData, index) => renderMenu(menuData, index))}
      </ul>
    </div>
  );
}
export default LeftInfoNavWithSubMenu;
