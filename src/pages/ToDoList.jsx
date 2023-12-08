import React, {useState} from "react";




function ToDoList(){

  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuVisible(!isSubMenuVisible);
      };
    return(

        <>
       <ul className="menu">
      <li className="menu-item display">
        <a href="javascript:void(0)" className="menu-link right-arrow" onClick={toggleSubMenu}>
          <span className="menu-icon">
            <i className="fa-regular fa-envelope"></i>
            <span className="menu-text side-menu-user"> To do list </span>
          </span>
          <span className="menu-arrow">
            <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
          </span>
        </a>

        <ul className={`sub-menu ${isSubMenuVisible ? '' : 'hidden'}`}>
          <li className="menu-item">
            <a href="email-inbox.html" className="menu-link" role="menuitem">
              <span className="menu-text">Open Task</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="email-templates.html" className="menu-link">
              <span className="menu-text">All Task</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>

        
        </>
    )
}
export default ToDoList;