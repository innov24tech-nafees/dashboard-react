import React, { useState } from "react";
import MenuList from "../ChildComponents/MenuList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import MenuList from "../ChildComponents/MenuList";

// import { faList, faUsers,  faArrowAltCircleRight, faBullseye, faTimes } from '@fortawesome/free-solid-svg-icons';

function SideMenu(Props) {
  const { icons, PagesName, menuList } = Props;
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <>
      <ul className="menu">
        <li className="menu-item display">
          <a href="javascript:void(0)" className="menu-link right-arrow" onClick={toggleSubMenu}>
            <span className="menu-icon flex gap-2 items-center">
              <FontAwesomeIcon icon={icons} />
              <span className="menu-text side-menu-user">{PagesName}</span>
            </span>
            <span className="menu-arrow">
              <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
            </span>
          </a>

          <ul className={`sub-menu ${isSubMenuVisible ? '' : 'hidden'}`}>
            <MenuList menuList={menuList} />
          </ul>
        </li>
      </ul>
    </>
  );
}

export default SideMenu;

