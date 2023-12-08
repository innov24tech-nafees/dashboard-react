import React, { useState } from "react";
import logoLightLg from '../img/logo-light.png';
import logoLightSm from '../img/logo-sm (1).png';

import logoDarkLg from '../img/logo-dark.png';
import logoDarkSm from '../img/logo-sm (2).png';
import userF from '../img/user-1.jpg';
// import OpenTask from "../SmallPages/OpenTask";
// import ToDoList from "../pages/ToDoList";
// import Contact from "../SmallPages/SideMenu";
// import Leads from "../SmallPages/Leads";
// import MenuList from "../ChildComponents/MenuList"
import SideMenu from "../SmallPages/SideMenu";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUsers,  faArrowAltCircleRight, faBullseye, faTimes, faClock, faPlus, faListUl, faPhoneVolume, faVectorSquare, faClockRotateLeft, faCalendarDay, faTableList, faPenClip } from '@fortawesome/free-solid-svg-icons';


function MenuPages() {
    // const { icons } = someOtherProp;

    const [isSubMenuVisible, setSubMenuVisible] = useState(false);

    const todoMenuItems = [
        { id: 1, text: 'Open Tasks', link: 'email-index.html',  icons: faClock},
        { id: 2, text: 'All Tasks', link: 'email-templates.html', icons: faClock },

    ]

    const contactMenuItems = [
        { id: 1, text: 'Create Contact', link: 'email-index.html', icons: faPlus},
        { id: 2, text: 'All Contacts', link: 'email-templates.html', icons: faListUl },
        { id: 3, text: 'Cold Calling', link: 'email-inbox.html', icons:faPhoneVolume },
    ]

    const leadsMenuItems = [
        { id: 1, text: 'Create Lead', link: 'email-index.html', icons: faPlus },
        { id: 2, text: 'My Leads', link: 'email-templates.html', icons: faVectorSquare },
        { id: 3, text: "Today's follow-ups", link: 'email-inbox.html', icons: faClock },
        { id: 4, text: 'Open Leads', link: 'email-inbox.html', icons: faBullseye },
        { id: 5, text: 'All Leads', link: 'email-inbox.html', icons: faListUl },
        { id: 6, text: 'Backlog(Pending)', link: 'email-inbox.html', icons: faClockRotateLeft },
        { id: 7, text: 'Calendar', link: 'email-inbox.html', icons: faCalendarDay },
    ]
    const opportunitiMenuItems = [
        { id: 1, text: 'Create Opportunity', link: 'email-index.html', icons: faPlus },
        { id: 2, text: 'My Opportunities', link: 'email-templates.html', icons: faVectorSquare },
        { id: 3, text: "Today's follow-ups", link: 'email-inbox.html', icons: faClock },
        { id: 4, text: "Open Opportunities", link: 'email-inbox.html', icons: faBullseye },
        { id: 5, text: "All Opportunities", link: 'email-inbox.html', icons: faListUl },
        { id: 6, text: "Backlog(Pending)", link: 'email-inbox.html', icons: faClockRotateLeft },
        { id: 7, text: "Calendar", link: 'email-inbox.html', icons: faCalendarDay },
    ]
    const propertiesMenuItems = [
        { id: 1, text: 'Create Property', link: 'email-index.html', icons: faClock  },
        { id: 2, text: 'Available Projects', link: 'email-templates.html', icons: faVectorSquare  },
        { id: 3, text: 'All Projects', link: 'email-inbox.html', icons: faListUl },
        { id: 4, text: 'RERA/HIRA Projects', link: 'email-inbox.html', icons: faListUl  },
        { id: 5, text: 'RERA/HIRA Projects', link: 'email-inbox.html', icons: faClock  },
        { id: 6, text: 'RERA/HIRA Projects', link: 'email-inbox.html', icons: faClockRotateLeft  },
    ]
    // const projectsMenuItems = [
    //     { id: 1, text: 'Create Project', link: 'email-index.html' },
    //     { id: 2, text: 'Available Projects', link: 'email-templates.html' },
    //     { id: 3, text: 'All Projects', link: 'email-inbox.html' },
    //     { id: 3, text: 'RERA/HIRA Projects', link: 'email-inbox.html' },
    // ]

    const toggleSubMenu = () => {
        setSubMenuVisible(!isSubMenuVisible);
    };




    return (

        <>
            {/* <div className="app-menu scrollable fixed h-screen   overflow-scroll"> */}
            <a href="index.html" className="logo-box">
                {/* <!-- Light Brand Logo --> */}
                <div className="logo-light">
                    <img src={logoLightLg} className="logo-lg lg-logo-light" alt="Light logo" />
                    <img src={logoLightSm} className="logo-sm  " alt="Small logo" />
                </div>

                {/* <!-- Dark Brand Logo --> */}
                <div className="logo-dark">
                    <img src={logoDarkLg} className="logo-lg dark:block side-menu-user" alt="Dark logo" />
                    <img src={logoDarkSm} className="logo-sm company-logo" alt="Small logo" />
                </div>
            </a>



            {/* <!--- Menu --> */}
            <div className="">
                {/* <!-- User Box --> */}

                <div className="user-box relative text-center mt-5 side-menu-user">
                    <img src={userF} alt="user-image"
                        className="rounded-full h-14 w-14 p-1 border border-gray-300/30 mx-auto mb-3" />
                    <div>
                        <button data-fc-type="dropdown" data-fc-placement="bottom" type="button"
                            className="dark:text-white user-name text-[15px] font-medium mb-1.5">Nowak Helme</button>
                        <div
                            className=" fc-dropdown-open:opacity-100 hidden opacity-0 w-40 z-50 transition-all duration-300 bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">

                            {/* <!-- item--> */}
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary dark:text-gray-400 hover:text-white dark:hover:text-white"
                                href="#">
                                <i data-lucide="user" className="w-4 h-4 me-2"></i>
                                <h1>My Account</h1>
                            </a>

                            {/* <!-- item--> */}
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary dark:text-gray-400 hover:text-white dark:hover:text-white"
                                href="#">
                                <i data-lucide="settings" className="w-4 h-4 me-2"></i>
                                <span>Settings</span>
                            </a>

                            {/* <!-- item--> */}
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary dark:text-gray-400 hover:text-white dark:hover:text-white"
                                href="#">
                                <i data-lucide="lock" className="w-4 h-4 me-2"></i>
                                <span>Lock Screen</span>
                            </a>

                            {/* <!-- item--> */}
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary dark:text-gray-400 hover:text-white dark:hover:text-white"
                                href="#">
                                <i data-lucide="log-out" className="w-4 h-4 me-2"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>

                    <p className="user-name text-sm mb-3">Admin Head</p>

                    <div className="flex justify-center gap-2 mb-4">
                        <a href="#" className="user-name">
                            {/* <!-- <i className="mdi mdi-cog text-base"></i> --> */}
                            <i className="fa-solid fa-gear"></i>
                        </a>

                        <a href="#" className="user-name">
                            {/* <!-- <i className="mdi mdi-power text-base"></i> --> */}
                            <i className="fa-solid fa-power-off"></i>
                        </a>
                    </div>
                </div>

                <ul className="menu all-menus " data-fc-type="accordion">
                    <li className="menu-title side-menu-user">Navigation</li>

                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <span className="">
                                {/* <!-- <i className="mdi mdi-view-dashboard-outline"></i> --> */}
                                <i className="fa-solid fa-table-columns"></i>
                            </span>
                            <span className="menu-text side-menu-user"> Dashboard </span>
                        </a>
                    </li>

                    {/* ALL PAGES START */}


                    <SideMenu
                        PagesName="To Do List"
                        menuList={todoMenuItems}
                        icons={faList}
                    />

                    <li className="menu-title side-menu-user">Data Management</li>

                    <SideMenu
                        PagesName="Contacts"
                        menuList={contactMenuItems}
                        icons={faUsers}
                    />

                    <SideMenu
                        PagesName="Leads"
                        menuList={leadsMenuItems}
                        icons={faArrowAltCircleRight}
                    />
                    <SideMenu
                        PagesName="Opportunities"
                        menuList={opportunitiMenuItems}
                        icons={faBullseye}
                        
                    />
                    <SideMenu
                        PagesName="Properties"
                        menuList={propertiesMenuItems}
                        icons={faTableList}
                    />




                    {/* <ul className="menu">
      <li className="menu-item display">
        <a href="javascript:void(0)" className="menu-link right-arrow" onClick={toggleSubMenu}>
          <span className="menu-icon">
            <i className="fa-regular fa-envelope"></i>
            <span className="menu-text side-menu-user"> Email </span>
          </span>
          <span className="menu-arrow">
            <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
          </span>
        </a>

        <ul className={`sub-menu ${isSubMenuVisible ? '' : 'hidden'}`}>
          <li className="menu-item">
            <a href="email-inbox.html" className="menu-link" role="menuitem">
              <span className="menu-text">Inbox</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="email-templates.html" className="menu-link">
              <span className="menu-text">Email Templates</span>
            </a>
          </li>
        </ul>
      </li>
    </ul> */}


                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link  right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-clipboard-outline"></i> --> */}
                                    <i className="fa-regular fa-clipboard"></i>
                                    <span className="menu-text side-menu-user"> Tasks </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                                {/* <!-- <span className="menu-arrow"></span> --> */}
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="task-kanban-board.html" className="menu-link">
                                        <span className="menu-text">Kanban Board</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="task-details.html" className="menu-link">
                                        <span className="menu-text">Details</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    <li className="menu-item">
                        <a href="apps-projects.html" className="menu-link">
                            <span className="menu-icon">
                                {/* <!-- <i className="mdi mdi-briefcase-variant-outline"></i> --> */}
                                <i className="fa-solid fa-suitcase-medical"></i>
                            </span>
                            <span className="menu-text side-menu-user"> Projects </span>
                        </a>
                    </li>

                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-book-open-page-variant-outline"></i> --> */}
                                    <i className="fa-solid fa-book-open"></i>

                                    <span className="menu-text side-menu-user"> Contacts </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                                {/* <!-- <span className="menu-arrow"></span> --> */}
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="contacts-list.html" className="menu-link">
                                        <span className="menu-text">Members List</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="contacts-profile.html" className="menu-link">
                                        <span className="menu-text">Profile</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    <li className="menu-title side-menu-user">Custom</li>


                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-account-multiple-plus-outline"></i> --> */}
                                    <i className="fa-solid fa-user-group"></i>
                                    <span className="menu-text side-menu-user"> Auth Pages </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="auth-login.html" className="menu-link">
                                        <span className="menu-text">Log In</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="auth-register.html" className="menu-link">
                                        <span className="menu-text">Register</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="auth-recoverpw.html" className="menu-link">
                                        <span className="menu-text">Recover Password</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="auth-lock-screen.html" className="menu-link">
                                        <span className="menu-text">Lock Screen</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="auth-confirm-mail.html" className="menu-link">
                                        <span className="menu-text">Confirm Mail</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="auth-logout.html" className="menu-link">
                                        <span className="menu-text">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    <li className="menu-item">
                        <a href="javascript:void(0)" className="menu-link">
                            <span className="menu-icon">
                                {/* <!-- <i className="mdi mdi-file-multiple-outline"></i> --> */}
                                <i className="fa-regular fa-copy"></i>
                            </span>
                            <span className="menu-text side-menu-user"> Extra Pages </span>
                            <span className="menu-arrow"></span>
                        </a>

                        <ul className="sub-menu hidden">
                            <li className="menu-item">
                                <a href="pages-starter.html" className="menu-link">
                                    <span className="menu-text">Starter</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-pricing.html" className="menu-link">
                                    <span className="menu-text">Pricing</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-timeline.html" className="menu-link">
                                    <span className="menu-text">Timeline</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-invoice.html" className="menu-link">
                                    <span className="menu-text">Invoice</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-faqs.html" className="menu-link">
                                    <span className="menu-text">FAQs</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-gallery.html" className="menu-link">
                                    <span className="menu-text">Gallery</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-404.html" className="menu-link">
                                    <span className="menu-text">Error 404</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-500.html" className="menu-link">
                                    <span className="menu-text">Error 500</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-maintenance.html" className="menu-link">
                                    <span className="menu-text">Maintenance</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pages-coming-soon.html" className="menu-link">
                                    <span className="menu-text">Coming Soon</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="layouts-horizontal.html" className="menu-link" target="_blank">
                            <span className="menu-icon">

                                {/* <!--<i className="mdi mdi-dock-window"></i> --> */}
                                <i className="fa-solid fa-tv"></i>
                            </span>
                            <span className="menu-text side-menu-user"> Horizontal </span>
                        </a>
                    </li>

                    <li className="menu-title side-menu-user">Components</li>

                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-briefcase-outline"></i> --> */}
                                    <i className="fa-solid fa-suitcase-rolling"></i>

                                    <span className="menu-text side-menu-user"> Base UI </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                                {/* <!-- <span className="menu-arrow"></span> --> */}
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="ui-buttons.html" className="menu-link">
                                        <span className="menu-text">Buttons</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-badges.html" className="menu-link">
                                        <span className="menu-text">Badges</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-cards.html" className="menu-link">
                                        <span className="menu-text">Cards</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-avatars.html" className="menu-link">
                                        <span className="menu-text">Avatars</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-tabs-accordions.html" className="menu-link">
                                        <span className="menu-text">Tabs & Accordions</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-modals.html" className="menu-link">
                                        <span className="menu-text">Modals</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-progress.html" className="menu-link">
                                        <span className="menu-text">Progress</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-notifications.html" className="menu-link">
                                        <span className="menu-text">Notifications</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-offcanvas.html" className="menu-link">
                                        <span className="menu-text">Offcanvas</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-placeholders.html" className="menu-link">
                                        <span className="menu-text">Placeholders</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-spinners.html" className="menu-link">
                                        <span className="menu-text">Spinners</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui.images.html" className="menu-link">
                                        <span className="menu-text">Images</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-swiper.html" className="menu-link">
                                        <span className="menu-text">Swiper</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-list-group.html" className="menu-link">
                                        <span className="menu-text">List Group</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-ratio.html" className="menu-link">
                                        <span className="menu-text">Embed Video</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-dropdowns.html" className="menu-link">
                                        <span className="menu-text">Dropdowns</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-tooltips-popovers.html" className="menu-link">
                                        <span className="menu-text">Tooltips & Popovers</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="ui-typography.html" className="menu-link">
                                        <span className="menu-text">Typography</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <li className="menu-item">
                        <a href="widgets.html" className="menu-link">
                            <span className="">
                                {/* <!-- <i className="mdi mdi-gift-outline"></i> --> */}
                                <i className="fa-solid fa-gift"></i>

                            </span>
                            <span className="menu-text side-menu-user"> Widgets </span>
                        </a>
                    </li>


                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-layers-outline"></i> --> */}
                                    <i className="fa-solid fa-layer-group"></i>

                                    <span className="menu-text side-menu-user"> Extended UI </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="extended-range-slider.html" className="menu-link">
                                        <span className="menu-text">Range Slider</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="extended-sweet-alert.html" className="menu-link">
                                        <span className="menu-text">Sweet Alert</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="extended-draggable-cards.html" className="menu-link">
                                        <span className="menu-text">Draggable Cards</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="extended-tour.html" className="menu-link">
                                        <span className="menu-text">Tour Page</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="extended-treeview.html" className="menu-link">
                                        <span className="menu-text">Tree View</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-shield-outline"></i> --> */}
                                    <i className="fa-solid fa-shield"></i>

                                    <span className="menu-text side-menu-user"> Icons </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="icons-material-design.html" className="menu-link">
                                        <span className="menu-text">Material Design</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="icons-material-symbols.html" className="menu-link">
                                        <span className="menu-text">Material Symbols</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="icons-lucide.html" className="menu-link">
                                        <span className="menu-text">Lucide Icons</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="icons-font-awesome.html" className="menu-link">
                                        <span className="menu-text">Font Awesome 5</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link  right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-texture"></i> --> */}
                                    <i className="fa-light fa-grip-lines"></i>

                                    <span className="menu-text side-menu-user"> Forms </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="forms-elements.html" className="menu-link">
                                        <span className="menu-text">General Elements</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-advanced.html" className="menu-link">
                                        <span className="menu-text">Advanced</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-validation.html" className="menu-link">
                                        <span className="menu-text">Validation</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-wizard.html" className="menu-link">
                                        <span className="menu-text">Wizard</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-quilljs-editor.html" className="menu-link">
                                        <span className="menu-text">Quilljs Editor</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-picker.html" className="menu-link">
                                        <span className="menu-text">Picker</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-file-uploads.html" className="menu-link">
                                        <span className="menu-text">File Uploads</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-table"></i> --> */}
                                    <i className="fa-solid fa-table"></i>

                                    <span className="menu-text side-menu-user"> Tables </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="tables-basic.html" className="menu-link">
                                        <span className="menu-text">Basic Tables</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="tables-datatables.html" className="menu-link">
                                        <span className="menu-text">Data Tables</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="tables-editable.html" className="menu-link">
                                        <span className="menu-text">Editable Tables</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="tables-tablesaw.html" className="menu-link">
                                        <span className="menu-text">Tablesaw Tables</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-equalizer"></i> --> */}
                                    <i className="fa-solid fa-chart-simple"></i>

                                    <span className="menu-text side-menu-user"> Apex Charts </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="charts-apex-area.html" className="menu-link">
                                        <span className="menu-text">Area</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-bar.html" className="menu-link">
                                        <span className="menu-text">Bar</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-bubble.html" className="menu-link">
                                        <span className="menu-text">Bubble</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-candlestick.html" className="menu-link">
                                        <span className="menu-text">Candlestick</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-column.html" className="menu-link">
                                        <span className="menu-text">Column</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-heatmap.html" className="menu-link">
                                        <span className="menu-text">Heatmap</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-line.html" className="menu-link">
                                        <span className="menu-text">Line</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-mixed.html" className="menu-link">
                                        <span className="menu-text">Mixed</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-timeline.html" className="menu-link">
                                        <span className="menu-text">Timeline</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-boxplot.html" className="menu-link">
                                        <span className="menu-text">Boxplot</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-treemap.html" className="menu-link">
                                        <span className="menu-text">Treemap</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-pie.html" className="menu-link">
                                        <span className="menu-text">Pie</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-radar.html" className="menu-link">
                                        <span className="menu-text">Radar</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-radialbar.html" className="menu-link">
                                        <span className="menu-text">Radialbar</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-scatter.html" className="menu-link">
                                        <span className="menu-text">Scatter</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-polar-area.html" className="menu-link">
                                        <span className="menu-text">Polar Area</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-apex-sparklines.html" className="menu-link">
                                        <span className="menu-text">Sparklines</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-chart-donut-variant"></i> --> */}
                                    <i className="fa-solid fa-chart-pie"></i>

                                    <span className="menu-text side-menu-user"> Chartsjs </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="charts-chartjs-area.html" className="menu-link">
                                        <span className="menu-text">Area</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-chartjs-bar.html" className="menu-link">
                                        <span className="menu-text">Bar</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-chartjs-line.html" className="menu-link">
                                        <span className="menu-text">Line</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="charts-chartjs-other.html" className="menu-link">
                                        <span className="menu-text">Other</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="menu">
                        <li className="menu-item display">
                            <a href="javascript:void(0)" className="menu-link right-arrow">
                                <span className="menu-icon">
                                    {/* <!-- <i className="mdi mdi-map"></i> --> */}
                                    <i className="fa-solid fa-map"></i>

                                    <span className="menu-text side-menu-user"> Maps </span>
                                </span>
                                <span className="menu-arrow">
                                    <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i>
                                </span>
                            </a>

                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <a href="maps-google.html" className="menu-link">
                                        <span className="menu-text">Google Maps</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="maps-vector.html" className="menu-link">
                                        <span className="menu-text">Vector Maps</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </div>
            {/* </div> */}
        </>
    );
}

export default MenuPages