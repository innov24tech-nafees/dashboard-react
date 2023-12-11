import React, { useEffect } from 'react';

import userS from '../img/user-11.jpg';
import userT from '../img/user-2.jpg';
import userF from '../img/user-3.jpg';
import userFive from '../img/user-5.jpg';

function NavArea(){

// dark mode
useEffect(() => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    const moonIcon = document.querySelector('.fa-moon');
    const sunIcon = document.querySelector('.fa-sun');
  
    // Check local storage for user preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
      enableDarkMode();
    }
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark');
      moonIcon.style.display = body.classList.contains('dark') ? 'none' : 'block';
      sunIcon.style.display = body.classList.contains('dark') ? 'block' : 'none';
  
      if (body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        localStorage.setItem('dark-mode', 'disabled');
      }
  
      // Toggle background color for other elements
      const appHeader = document.querySelector('.app-header');
      appHeader.classList.toggle('dark');
  
      const pageContent = document.querySelector('.page-content');
      pageContent.classList.toggle('dark-background');
  
      const totalRevenue = document.querySelector(".total-revenue");
      totalRevenue.classList.toggle('dark');
  
      const projectFirstRow = document.querySelector(".project-first");
      projectFirstRow.classList.toggle("dark:hover:bg-rgb(55 65 81 / .4)");
    });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const enableDarkMode = () => {
    const body = document.body;
    const moonIcon = document.querySelector('.fa-moon');
    const sunIcon = document.querySelector('.fa-sun');

    body.classList.add('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  };

    return(

        <>
             <div className="app-header">
                    <div className="flex gap-3 items-center py-8 px-6 header-nav  ">
                        {/* <!--  Brand Logo  --> */}
                        <a href="index.html" className="logo-box">
                            {/* <!--  Light Brand Logo  --> */}
                            {/* <!-- <div  className="logo-light">
                            <img src="assets/images/logo-light.png"  className="logo-lg" alt="Light logo">
                            <img src="assets/images/logo-sm.png"  className="logo-sm" alt="Small logo">
                        </div> --> */}

                            {/* <!--  Dark Brand Logo  --> */}
                            {/* <!-- <div  className="logo-dark">
                            <img src="assets/images/logo-dark.png"  className="logo-lg" alt="Dark logo">
                            <img src="assets/images/logo-sm.png"  className="logo-sm" alt="Small logo">
                        </div> --> */}
                        </a>

                        {/* <!-- Sidenav Menu Toggle Button  --> */}
                        <button id="button-toggle-menu" className="nav-link p-2">
                            <span className="sr-only">Menu Toggle Button</span>
                            <span className="flex items-center justify-center h-6 w-6 toggle-icon">
                                <i className="fa-solid fa-bars"></i>
                                {/* <!-- <i data-lucide="menu"  className="w-6 h-6 text-xl"></i> --> */}
                            </span>
                        </button>

                        {/* <!-- Page Title  --> */}
                        <div className="me-auto">
                            <div className="md:flex hidden">
                                <h4 className="page-title text-lg font-bold">Dashboard</h4>
                            </div>
                        </div>

                        <div className="md:flex hidden items-center relative">
                            <div
                                className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none toggle-icon">
                                {/* <!-- <i  className="mdi mdi-magnify text-base opacity-60 -z-10"></i> --> */}
                                <i className="text-xs fa-solid fa-magnifying-glass"></i>
                            </div>
                            <input type="search"
                                className="form-input pe-8 ps-4 py-1.5 rounded-full bg-gray-500/10 border focus:border-transparent placeholder:opacity-60"
                                placeholder="Search..." />
                        </div>

                        {/* <!--  Light/Dark Toggle Button --> */}
                        <div className="flex">
                            <button id="dark-mode-toggle" type="button" className="nav-link p-2">
                                <span className="sr-only">Light/Dark Mode</span>
                                <span className="flex items-center justify-center h-6 w-6 toggle-icon">

                                    <i className="fa-regular fa-moon dark:hidden hover:text-[#71b6f9]"></i>
                                    <i className="fa-regular fa-sun hidden dark:block "></i>
                                    {/* <!-- <i data-lucide="sun"  className="hidden dark:block"></i> --> */}
                                </span>
                            </button>
                        </div>

                        {/* <!-- Notification Bell Button  --> */}

                        <div className="relative md:flex hidden notification">
                            <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button"
                                className="nav-link p-2">
                                <span className="sr-only">View notifications</span>
                                <span className="flex items-center justify-center h-6 w-6 toggle-icon" id="bell-icon">
                                    {/* <!-- <i data-lucide="bell"></i> --> */}
                                    <i className="fa-regular fa-bell hover:text-[#71b6f9]"></i>
                                    <span
                                        className="absolute  end-1.5 w-4 h-4 flex items-center justify-center rounded-full bg-[#ff0000c2] top-0 text-white  font-medium text-[10px]">9</span>
                                </span>
                            </button>


                            <div
                                className="total-revenue notification-massage absolute left-[-18rem] bg-white   top-[3rem] fc-dropdown  fc-dropdown-open:opacity-100 hidden  w-80 z-50 transition-[margin,opacity] duration-300   dark:bg-black shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">

                                <div className="p-4">

                                    <div className="flex items-center justify-between">
                                        <h6 className="text-sm"> Notification</h6>
                                        <a href="javascript: void(0);" className="text-gray-500">
                                            <small id="clear-all-link" className="card-title">Clear All</small>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-4 h-80" data-simplebar>
                                    <h5 className="text-xs text-gray-500 dark:text-gray-300 mb-2">Today</h5>

                                    <a href="javascript:void(0);" className="block mb-4">
                                        <div className="card-body">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <div
                                                        className="flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary">
                                                        <i className="mdi mdi-comment-account-outline text-lg"></i>
                                                        <img className="rounded-full"
                                                            src="./src/img\360_F_328113542_31B2IVU37qZ09cXXA6iMSXs62Optrwok.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow truncate ms-2">
                                                    <h5 className="text-sm font-semibold  mb-1">Datacorp <small
                                                        className="font-normal text-gray-500 ms-1">1 min ago</small>
                                                    </h5>
                                                    <small className="noti-item-subtitle text-muted">Caleb Flakelar
                                                        commented on
                                                        Admin</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="javascript:void(0);" className="block mb-4">
                                        <div className="card-body">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <div
                                                        className="flex justify-center items-center h-9 w-9 rounded-full bg-info text-white">
                                                        <i className="mdi mdi-heart text-lg"></i>
                                                        <img className="rounded-full" src={userF} alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow truncate ms-2">
                                                    <h5 className="text-sm font-semibold mb-1">Admin <small
                                                        className="font-normal text-gray-500 ms-1">1 hr ago</small></h5>
                                                    <small className="noti-item-subtitle text-muted">New user
                                                        registered</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="javascript:void(0);" className="block mb-4">
                                        <div className="card-body">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img src={userS} className="rounded-full h-9 w-9" alt="" />
                                                </div>
                                                <div className="flex-grow truncate ms-2">
                                                    <h5 className="text-sm font-semibold mb-1">Cristina Pride <small
                                                        className="font-normal text-gray-500 ms-1">1 day ago</small>
                                                    </h5>
                                                    <small className="noti-item-subtitle text-muted">Hi, How are you? What
                                                        about
                                                        our next meeting</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <h5 className="text-xs text-gray-500 mb-2">Yesterday</h5>

                                    <a href="javascript:void(0);" className="block mb-4">
                                        <div className="card-body">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <div
                                                        className="flex justifyer items-center h-9 w-9 rounded-full bg-primary text-white">
                                                        <i className="mdi mdi-account-plus text-lg"></i>
                                                        <img className="rounded-full" src={userT} alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow truncate ms-2">
                                                    <h5 className="text-sm font-semibold mb-1">Datacorp</h5>
                                                    <small className="noti-item-subtitle text-muted">Caleb Flakelar
                                                        commented on
                                                        Admin</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="javascript:void(0);" className="block">
                                        <div className="card-body">
                                            <div className="flex items-center">
                                                {/* <!-- <div  className="flex-shrink-0">
                                                <img src="../img/user-1.jpg"  className="rounded-full h-9 w-9"
                                                    alt="user-logo">
                                            </div> --> */}
                                                {/* <!-- <div  className="flex-grow truncate ms-2">
                                                <h5  className="text-sm font-semibold mb-1">Karen Robinson</h5>
                                                <small  className="noti-item-subtitle text-muted">Wow ! this admin looks good
                                                    and awesome design</small>
                                            </div> --> */}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </a>


                                    <a href="javascript:void(0);"
                                        className="p-2 border-t border-dashed border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold">
                                        View All
                                    </a>

                                </div>
                            </div>
                            {/* <!-- </li>
                    </ul> --> */}

                            {/* <!-- Profile Dropdown Button  --> */}
                            <div className="relative">
                                <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button"
                                    id="user-profile" className="nav-link flex items-center">
                                    <img src={userS} alt="user-image" className="rounded-full h-8 w-8 " />
                                    <span className="text-sm mx-2 toggle-icon hover:text-[#71b6f9]">Nowak</span>
                                    {/* <!-- <i  className="mdi mdi-chevron-down"></i> --> */}
                                    <i className="text-xs fa-solid fa-angle-down toggle-icon hover:text-[#71b6f9]"></i>
                                </button>
                                <div
                                    className="total-revenue user-profile-id bg-white absolute fc-dropdown fc-dropdown-open:opacity-100 hidden  w-44 z-50 transition-[margin,opacity] duration-300  shadow-lg border rounded py-2 border-gray-200 dark:border-gray-700 dark:bg-black">
                                    <h6 className="py-2 px-5">Welcome !</h6>

                                    <a className="hover:text-black gap-1 flex items-center py-2 px-5 text-sm hover:bg-gray-100"
                                        href="pages-gallery.html">
                                        <i data-lucide="user" className="w-4 h-4 me-2"></i>
                                        <img className="w-3" src="./img/user.png" alt="user-logo" />
                                        <span>My Account</span>
                                    </a>


                                    <a className="flex items-center gap-1 py-2 px-5 text-sm  hover:text-black hover:bg-gray-100  dark:hover:text-black"
                                        href="apps-kanban.html">
                                        <i data-lucide="lock" className="w-4 h-4 me-2"></i>
                                        <img className="w-3" src="./img/settings.png" alt="user-logo" />
                                        <span>Settings</span>
                                    </a>
                                    <a className="flex items-center gap-1 py-2 px-5 text-sm  hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="auth-login.html">
                                        <i data-lucide="lock" className="w-4 h-4 me-2"></i>
                                        <img className="w-3" src="./img/lock.png" alt="user-logo" />
                                        <span>Lock Screen</span>
                                    </a>
                                    <hr className="my-2 -mx-2 border-gray-200 dark:border-gray-700" />
                                    <a className="flex items-center py-2 gap-1 px-5 text-sm hover:text-black  hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="auth-login.html">
                                        <i data-lucide="log-out" className="w-4 h-4 me-2"></i>
                                        <img className="w-3" src="./img/logout.png" alt="user-logo" />
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </div>

                            {/* <!-- Customization Button   --> */}
                            <div className="flex">
                                <button type="button" className="nav-link p-2" data-fc-type="offcanvas"
                                    data-fc-target="theme-customization" data-fc-scroll="true">
                                    <span className="sr-only">Customization Button</span>
                                    <span className="flex items-center justify-center h-6 w-6 toggle-icon hover:text-[#71b6f9]">
                                        <i className="fa-solid fa-gear dark:hidden"></i>
                                        {/* <!-- <i data-lucide="settings"></i> --> */}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    
        </>
    )
}
export default NavArea;