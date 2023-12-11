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
import { faList, faUsers, faArrowAltCircleRight, faBullseye, faTimes, faClock, faPlus, faListUl, faPhoneVolume, faVectorSquare, faClockRotateLeft, faCalendarDay, faTableList, faPenClip, faTableCells, faArrowTrendUp, faCode, faBullhorn, faGavel } from '@fortawesome/free-solid-svg-icons';


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToDoList from "../pages/ToDoList";


function MenuPages() {
    // const { icons } = someOtherProp;

    const [isSubMenuVisible, setSubMenuVisible] = useState(false);

    const todoMenuItems = [
        { id: 1, text: 'Open Tasks',   link: '/open-tasks', icons: faClock },
        { id: 2, text: 'All Tasks', link: 'email-templates.html', icons: faClock },

    ]

    const contactMenuItems = [
        { id: 1, text: 'Create Contact', link: 'email-index.html', icons: faPlus },
        { id: 2, text: 'All Contacts', link: 'email-templates.html', icons: faListUl },
        { id: 3, text: 'Cold Calling', link: 'email-inbox.html', icons: faPhoneVolume },
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
        { id: 1, text: 'Create Property', link: 'email-index.html', icons: faClock },
        { id: 2, text: 'My Properties', link: 'email-templates.html', icons: faVectorSquare },
        { id: 3, text: "Today's follow-ups", link: 'email-inbox.html', icons: faListUl },
        { id: 4, text: 'Available Properties', link: 'email-inbox.html', icons: faListUl },
        { id: 5, text: 'Follow-ups Properties', link: 'email-inbox.html', icons: faClock },
        { id: 6, text: 'Backlog(Pending)', link: 'email-inbox.html', icons: faClockRotateLeft },
    ]
    const projectsMenuItems = [
        { id: 1, text: 'Create Project', link: 'email-index.html', icons:  faPenClip},
        { id: 2, text: 'Available Projects', link: 'email-templates.html', icons:  faListUl },
        { id: 3, text: 'All Projects', link: 'email-inbox.html', icons:  faListUl },
        { id: 3, text: 'RERA/HIRA Projects', link: 'email-inbox.html', icons:  faGavel },
    ]

    const sitevisitsMenuItems = [
        { id: 1, text: 'Create Project', link: 'email-index.html' },
        { id: 2, text: 'Available Projects', link: 'email-templates.html' },
        { id: 3, text: 'All Projects', link: 'email-inbox.html' },
        { id: 3, text: 'RERA/HIRA Projects', link: 'email-inbox.html' },
    ]

    const templatesMenuItems = [
        { id: 1, text: 'Create Project', link: 'email-index.html' },
        { id: 2, text: 'Available Projects', link: 'email-templates.html' },
        { id: 3, text: 'All Projects', link: 'email-inbox.html' },
        { id: 3, text: 'RERA/HIRA Projects', link: 'email-inbox.html' },
    ]

    const campaignsMenuItems = [
        { id: 1, text: 'Create Project', link: 'email-index.html' },
        { id: 2, text: 'Available Projects', link: 'email-templates.html' },
        { id: 3, text: 'All Projects', link: 'email-inbox.html' },
        { id: 3, text: 'RERA/HIRA Projects', link: 'email-inbox.html' },
    ]

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
                        link={ ToDoList } 
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
                    <SideMenu
                        PagesName="Projects"
                        menuList={projectsMenuItems}
                        icons={faTableCells}
                    />

                    <SideMenu
                        PagesName="Site Visits"
                        menuList={sitevisitsMenuItems}
                        icons={faArrowTrendUp}
                    />


                    <li className="menu-title side-menu-user">Marketing Campaign</li>

                    <SideMenu
                        PagesName="Templates"
                        menuList={templatesMenuItems}
                        icons={faCode}
                    />
                    <SideMenu
                        PagesName="Campaigns"
                        menuList={campaignsMenuItems}
                        icons={faBullhorn}
                    />

{/* 
                        </li>
                    </ul> */}
                </ul>
            </div>
            {/* </div> */}
        </>
    );
}

export default MenuPages