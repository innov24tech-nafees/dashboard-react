import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuList({ menuList }) {
    return (
        <>
            {menuList.map((menuItem) => (
                <li key={menuItem.id} className="menu-item pl-4 py-1 ">
                    <a key={menuItem.id}
                        href={menuItem.link}
                        className="menu-link flex gap-2 items-center"
                        role="menuitem"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={menuItem.icons} />
                        <span className="menu-text">{menuItem.text}</span>
                    </a>
                </li>

            ))}
        </>
    );
}

export default MenuList;
