import React, { useState, useEffect } from "react";
import TotalRevenueCard from "../ChildComponents/TotalRevenueCard";
import Progressbar from "../ChildComponents/Progressbar";
import ProgressLine from "../ChildComponents/ProgressLine";
import ProgressbarSec from "../ChildComponents/ProgressbarSec";

function TotalRevenue() {

    const dynamicPercent = 150;
    const dynamicPercentLess = 182;
    const Heading = "Total Revenues";
    
    const BackgroundColorGreen = '#22c55e';
    const HeightValue = '6px'
    const BackgroundColorPink = '#ff8acc';
    const textColorValue = '#f00';


    

    


    return (
        <>

            <div className="container px-7 py-2 mx-auto ">
                <div className="flex flex-wrap -m-4">

                    < TotalRevenueCard
                        Heading={"Contact"}
                        Progressbar={<Progressbar bgColor="#fc3a3b" ValuePercent="30" />}
                        Value={"29"}
                        TextColor={textColorValue}
                        // bgColor={BackgroundColorGreen}

                    />

                    {/* <ProgressLine
                        Heading={"Sales Analytics"}
                        Percent={"32%"}
                        Value={"4589"}
                        Color={BackgroundColorGreen}
                        Height={HeightValue}
                    /> */}

                    < TotalRevenueCard
                        Heading={"Leads"}
                        Progressbar={<Progressbar bgColor="#65e9a5"  ValuePercent="33" />}
                        Value={"33"}
                        TextColor={textColorValue}
                        bgColor={BackgroundColorGreen}

                    />

                    < TotalRevenueCard
                        Heading={"opportunity"}
                        Progressbar={<Progressbar bgColor="#ffbd4a"  ValuePercent="60" />}
                        Value={"0"}
                        TextColor={textColorValue}
                        bgColor={BackgroundColorGreen}
                    />

                    < TotalRevenueCard
                        Heading={"Won"}
                        Progressbar={<Progressbar bgColor="#ff8acc"  ValuePercent="80" />}
                        Value={"0"}
                        TextColor={textColorValue}
                        bgColor={BackgroundColorGreen}

                    />

                    {/* <ProgressLine
                        Heading={"Daily Sales"}
                        Percent={"60%"}
                        Value={"652"}
                        Color={BackgroundColorPink}
                        Height={HeightValue}
                    /> */}

                    {/* <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                        <a className="block relative rounded overflow-hidden">
                            <div className="p-6 bg-white h-44 total-revenue rounded">
                                <div className="flex items-center justify-between pb-6">
                                    <h4 className="card-title">Sales Analytics</h4>

                                    <div className="z-10">
                                        <button className="dropdown-revenue-cl " type="button">
                                        
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </button>

                                        <div id="dropdown-target1"
                                            className="hidden bg-white shadow rounded border dark:border-slate-700 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all duration-300 py-2 dark:bg-gray-800 fc-dropdown">
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-stone-100 dark:hover:bg-slate-700 dark:hover:text-gray-200"
                                                href="javascript:void(0)">
                                                Action
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Another action
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Something else
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Separated link
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex items-center justify-between ">
                                    <div dir="ltr" className="card w-full h-2">
                                        <div className="flex justify-around gap-x-6 pb-2">

                                            <div
                                                className="bg-green-500 m-auto h-5 w-16 text-white rounded-full text-xs px-2 py-0.5">
                                                32%
                                    
                                                <i className="fa-solid fa-arrow-trend-up"></i>
                                            </div>
                                            <div className="text-end ">
                                                <h2
                                                    className="total-revenue revenue-nub text-3xl font-normal text-gray-800 dark:text-white mb-1">
                                                    4569
                                                </h2>
                                                <p className="text-gray-400 font-normal">Revenue today</p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                            <div className="bg-green-500 h-2.5 rounded-full w-3/4">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div> */}

                    {/* 3 */}
                    {/* <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                        <a className="block relative rounded overflow-hidden">
                            <div className="p-6 bg-white h-44 total-revenue rounded">
                                <div className="flex items-center justify-between ">
                                    <h4 className="card-title">Statistics</h4>

                                    <div className="z-10">
                                        <button className="dropdown-revenue-cl " type="button">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </button>

                                        <div id="dropdown-revenue"
                                            className="hidden fc-dropdown bg-white shadow rounded border dark:border-slate-700 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all duration-300 py-2 dark:bg-gray-800 fc-dropdown">
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-stone-100 dark:hover:bg-slate-700 dark:hover:text-gray-200"
                                                href="javascript:void(0)">
                                                Action
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Another action
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Something else
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Separated link
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div dir="ltr" className="card">
                                        <div className="percent">
                                            <svg>
                                                <circle cx="105" cy="105" r="30"></circle>
                                                <circle cx="105" cy="105" r="30" style={{
                                                    strokeDasharray: `${dynamicPercentLess}, 100`,
                                                    strokeDashoffset: '25',
                                                    stroke: 'bg-yello-rgba',
                                                    fill: 'none',  
                                                }}></circle>
                                            </svg>
                                            <div className="number ">
                                                <h3 className="text-red-rgba">88<span>%</span></h3>
                                            </div>
                                        </div>

                                        <div className="text-end progress-text">
                                            <h2
                                                className="total-revenue revenue-nub text-3xl font-normal text-gray-800 dark:text-white mb-1">
                                                4569
                                            </h2>
                                            <p className="text-gray-400 font-normal">Revenue today</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div> */}


                    {/* 4 */}
                    {/* <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                        <div className="block relative rounded overflow-hidden">
                            <div className="p-3 bg-white h-44 total-revenue rounded">
                                <div className="flex items-center justify-between pb-6">
                                    <h4 className="card-title">Daily Sales</h4>

                                    <div className="z-10">
                                        <button d className="dropdown-revenue-cl " type="button">
                                           
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </button>

                                        <div id="dropdown-target1"
                                            className="hidden bg-white shadow rounded border dark:border-slate-700 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all duration-300 py-2 dark:bg-gray-800 fc-dropdown">
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-stone-100 dark:hover:bg-slate-700 dark:hover:text-gray-200"
                                                href="javascript:void(0)">
                                                Action
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Another action
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Something else
                                            </a>
                                            <a className="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                href="javascript:void(0)">
                                                Separated link
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between ">
                                    <div dir="ltr" className="card w-full h-2">
                                        <div className="flex justify-around gap-x-6 pb-2">

                                            <div
                                                className="bg-[#ff8acc] m-auto h-5 w-16 text-white rounded-full text-xs px-2 py-0.5">
                                                32%
                                               
                                                <i className="fa-solid fa-arrow-trend-up"></i>
                                            </div>
                                            <div className="text-end ">
                                                <h2
                                                    className="total-revenue revenue-nub text-3xl font-normal text-gray-800 dark:text-white mb-1">
                                                    159
                                                </h2>
                                                <p className="text-gray-400 font-normal">Revenue today</p>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                            <div className="bg-[#ff8acc] h-2.5 rounded-full w-3/4 " >
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> */}

                </div>
            </div>


        </>
    )
}
export default TotalRevenue;