import React from "react";
import Progressbar from "./Progressbar";


function TotalRevenueCard(props){
    const dynamicPercent = 150;
    const dynamicPercentLess = 182;

    // const Heading = props.Heading;

    return(
        <>
        <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                        <a href="#" className="block relative rounded overflow-hidden" >
                            {/* <!-- <img alt="ecommerce"  className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"> --> */}

                            <div className="p-6 bg-white h-40 total-revenue rounded">
                                <div className="flex items-center justify-between ">
                                    <h4 className="card-title">{props.Heading}</h4>
                                    {/* <div className="z-10">
                                        <button className="dropdown-revenue-cl" type="button">
                                        
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </button>

                                        <div id="dropdown-revenue"
                                            className="hidden fc-dropdown bg-white shadow rounded border dark:border-slate-700 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all duration-300 py-2 dark:bg-gray-800 fc-dropdown">
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-stone-100 dark:hover:bg-slate-700 dark:hover:text-gray-200"
                                                href="#">
                                                Action
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="#">
                                                Another action
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="#">
                                                Something else
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="#">
                                                Separated link
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                                {/* strokeDasharray: `percent={dynamicPercent}, 75`, */}
                                <div className="flex items-center justify-between relative top-[-48px]">
                                    <div dir="ltr" className="card">
                                        <div className="percent">
                                          
                                    {/* < Progressbar   /> */}
                                    {props.Progressbar}     
                                        </div> 
                                        
                                        <div className="text-end progress-text">
                                            <h2 
                                                className="total-revenue revenue-nub text-3xl font-normal text-gray-800 dark:text-white mb-1">
                                                    {props.Value}
                                                {/* 256 */}
                                            </h2>
                                            {/* <p className="text-gray-400 font-normal">Revenue today</p> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
        </>
    )
}
 export default TotalRevenueCard;