import React from "react";

import userS from '../img/user-11.jpg';
import userT from '../img/user-2.jpg';
import userF from '../img/user-3.jpg';
import userFive from '../img/user-5.jpg';
import NavArea from '../components/NavArea'
import TotalRevenue from '../SubComponents/TotalRevenue'
import RockLineChart from "../ChildComponents/RocksLineChart";
import FunnelChart from "../ChildComponents/FunnelChart";
import FunnelSecond from "../ChildComponents/FunnelSecond";
import TimeDuration from "../ChildComponents/TimeDuration";
// import Icons from "../SubComponents/IconTeli";
import Icons from "../SubComponents/Icons";
import IconLocation from "../SubComponents/IconLocation";
import SourceProgress from "./SourceProgress";
import LineProgress from "../SubComponents/LineProgress";

function Topbar() {



    return (

        <>
            {/* <div className="page-content-all-area"> */}
            <div className="page-content   ">
                <NavArea />
            </div>
            {/* <!====================Topbar End ==========================> */}

            {/* <!========== Main Content Total Revenue card start =======> */}

            <div className="text-gray-600  app-header">

                <TotalRevenue />



                {/* <!-- deshboard chart area start --> */}
                {/* <!-- morris donut chart --> */}
                <section>

                    <div className="flex flex-wrap  w-full bg-[#f3f4f6]  app-header px-[0.8rem] py-2">
                        <div className="p-3 md:w-1/2 h-[375px]">
                            <div className="flex rounded-lg h-full bg-white pt-16 p-6 flex-col total-revenue">

                                <RockLineChart />

                            </div>
                        </div>


                        {/* multiline chart End */}

                        {/* Funnel chart start */}
                        <div className="p-3 md:w-1/4 h-[375px]">
                            <div className="flex rounded-lg h-full bg-white p-6 flex-col total-revenue">
                                {/* <RockLineChart /> */}
                                < FunnelChart />

                            </div>
                        </div>

                        {/* Funnel chart End */}

                        <div className="p-3 md:w-1/4 h-[375px]">
                            <div className="flex rounded-lg h-full bg-white p-6 flex-col total-revenue">
                                {/* <!-- <div  className="flex items-center mb-3"> --> */}

                                {/* < FunnelChart /> */}
                                < FunnelSecond />


                            </div>


                        </div>
                    </div>


                </section>
                {/* <!-- </div> --> */}



                {/* <!-- maim content end --> */}


                {/* <!-- identity users card stayrt --> */}


                <section className="text-gray-600 ">
                    <div className="p-4  mx-auto bg-[#f3f4f6] app-header px-7 py-2 ">
                        <div className="flex flex-wrap -m-4 text-center">

                            < TimeDuration
                                DurationHeading="Average Lead Duration"
                                DurationValue="5 Days"
                                Icons={<Icons />}

                                
                            />



                            < TimeDuration
                                DurationHeading="Average Sales Duration"
                                DurationValue="0 Days"
                                Icons={<Icons />}
                            />


                            < TimeDuration
                                DurationHeading="Total Proposal sent"
                                DurationValue="0 Days"
                                Icons={<Icons />}
                            />


                            < TimeDuration
                                DurationHeading="Total Campaigns"
                                DurationValue="0 Days"
                                Icons={<Icons />}
                            />



                        </div>
                    </div>
                </section>

                {/* <!-- identity card end --> */}
                <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                    < SourceProgress
                    OpportunitiesTxt="Opportunities Stage"
                    />
                      < SourceProgress
                    OpportunitiesTxt="Property Source"
                    />
                       < SourceProgress
                    OpportunitiesTxt="Top Lead Sources"
                    Progress={< LineProgress />}
                    />
                    </div>
                    </div>

                    </section>



                {/* <!-- seshboard inbox start--> */}
                {/* <section>
                    <div className="p-4 xl:grid-cols-3 grid-cols-1 gap-6 flex bg-[#f3f4f6] app-header px-[1.5rem] py-4">
                        <div className="card">
                            <div className="p-6 bg-white total-revenue rounded">

                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="card-title">Inbox</h4>

                                    <div>
                                        <button data-fc-target="dropdown-target5" data-fc-type="dropdown" type="button"
                                            data-fc-placement="bottom-end" className="fc-dropdown">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </button>

                                        <div id=" dropdown-target5"
                                            className=" left-1/2 top-80 absolute left-439.5 top-921 bg-white shadow rounded border dark:border-slate-700 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all duration-300 py-2 dark:bg-gray-800 fc-dropdown hidden"
                                        >
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
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <a href="#" className="flex justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <img src={userFive} className="rounded-full h-10" alt="" />
                                            <div>
                                                <h5 className="text-gray-800 dark:text-white text-sm mb-1 total-revenue">
                                                    Chadengle</h5>
                                                <p className="text-xs text-gray-400">Hey! there I'm available...</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400">4:30 PM</p>
                                    </a>

                                    <div className="border-b dark:border-gray-700 border-gray-50"></div>

                                    <a href="#" className="flex justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <img src={userT} className="rounded-full h-10" alt="user-1" />
                                            <div>
                                                <h5 className="text-gray-800 dark:text-white text-sm mb-1 total-revenue">
                                                    Tomaslau</h5>
                                                <p className="text-xs text-gray-400">I've finished it! See you so...</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400">10:15 PM</p>
                                    </a>

                                    <div className="border-b dark:border-gray-700 border-gray-50"></div>

                                    <a href="#" className="flex justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <img src={userF} className="rounded-full h-10" alt="user-2" />
                                            <div>
                                                <h5 className="text-gray-800 dark:text-white text-sm mb-1 total-revenue">
                                                    Still david</h5>
                                                <p className="text-xs text-gray-400">This theme is awesome!</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400">1:30 PM</p>
                                    </a>

                                    <div className="border-b dark:border-gray-700 border-gray-50"></div>

                                    <a href="#" className="flex justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <img src={userF} className="rounded-full h-10" alt="user-3" />
                                            <div>
                                                <h5 className="text-gray-800 dark:text-white text-sm mb-1 total-revenue">
                                                    Kurafire</h5>
                                                <p className="text-xs text-gray-400">Nice to meet you</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400">14:20 PM</p>
                                    </a>

                                    <div className="border-b dark:border-gray-700 border-gray-50"></div>

                                    <a href="#" className="flex justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <img src={userT} className="rounded-full h-10" alt="user-2" />
                                            <div>
                                                <h5 className="text-gray-800 dark:text-white text-sm mb-1 total-revenue">
                                                    Shahedk</h5>
                                                <p className="text-xs text-gray-400">Hey! there I'm available...</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400">2:36 AM</p>
                                    </a>
                                </div>

                            </div>
                        </div>
             

                        <div className="xl:col-span-2 col-span-1 scrollable   overflow-scroll">
                            <div className="card">
                                <div className="p-3 bg-white w-full total-revenue rounded">

                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="card-title">Latest Projects</h3>

                                        <div>
                                            <button data-fc-target="dropdown-target6" data-fc-type="dropdown"
                                                type="button" data-fc-placement="bottom-end" className="fc-dropdown">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </button>

                                            <div id="dropdown-target6"
                                                className="hidden bg-white shadow rounded border dark:border-slate-700 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all duration-300 py-2 dark:bg-gray-800 fc-dropdown">
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
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto  main-content-scroll">
                                        <div className="min-w-full inline-block align-middle">
                                            <div className="overflow-hidden">
                                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                    <thead>
                                                        <tr className="border-b-2 dark:border-gray-700">
                                                            <th scope="col"
                                                                className="px-4 py-4 text-start font-semibold text-gray-500 dark:text-gray-200">
                                                                #</th>
                                                            <th scope="col"
                                                                className="px-4 py-4 text-start font-semibold text-gray-500 dark:text-gray-200">
                                                                Project Name</th>
                                                            <th scope="col"
                                                                className="px-4 py-4 text-start font-semibold text-gray-500 dark:text-gray-200">
                                                                Start Date</th>
                                                            <th scope="col"
                                                                className="px-4 py-4 text-start font-semibold text-gray-500 dark:text-gray-200">
                                                                Due Date</th>
                                                            <th scope="col"
                                                                className="px-4 py-4 text-start font-semibold text-gray-500 dark:text-gray-200">
                                                                Status</th>
                                                            <th scope="col"
                                                                className="px-4 py-4 text-start font-semibold text-gray-500 dark:text-gray-200">
                                                                Assign</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                        <tr
                                                            className="project-first transition-all  hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                1</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto
                                                                Admin v1</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                01/01/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                26/04/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                <span
                                                                    className="text-xs text-white bg-blue-500 rounded-md px-1 py-0.5">Released</span>
                                                            </td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Coderthemes</td>
                                                        </tr>

                                                        <tr
                                                            className="project-first transition-all hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                2</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto
                                                                Frontend v1</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                01/01/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                26/04/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                <span
                                                                    className="text-xs text-white bg-pink-500 rounded-md px-1 py-0.5">Released</span>
                                                            </td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto
                                                                admin</td>
                                                        </tr>

                                                        <tr
                                                            className="project-first transition-all hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                3</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto
                                                                Admin v1.1</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                01/05/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                10/05/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                <span
                                                                    className="text-xs text-white bg-yellow-500 rounded-md px-1 py-0.5">Pending</span>
                                                            </td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Coderthemes</td>
                                                        </tr>

                                                        <tr
                                                            className="project-first transition-all hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                4</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto
                                                                Frontend v1.1</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                01/01/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                31/05/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                <span
                                                                    className="text-xs text-white bg-pink-500 rounded-md px-1 py-0.5">Work
                                                                    in
                                                                    Progress</span>
                                                            </td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto
                                                                admin</td>
                                                        </tr>

                                                        <tr
                                                            className="project-first transition-all hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                5</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto
                                                                Admin v1.3</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                01/01/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                31/05/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                <span
                                                                    className="text-xs text-white bg-orange-500 rounded-md px-1 py-0.5">Coming
                                                                    soon</span>
                                                            </td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Coderthemes</td>
                                                        </tr>

                                                        <tr
                                                            className="project-first transition-all hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                6</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto
                                                                Admin v1.3</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                01/01/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                31/05/2017</td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                <span
                                                                    className="text-xs text-white bg-red-500 rounded-md px-1 py-0.5">Coming
                                                                    soon</span>
                                                            </td>
                                                            <td
                                                                className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                                Adminto admin</td>
                                                        </tr>
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
   
                    </div>
                </section> */}
            </div>

            {/* <!-- seshboard inbox end--> */}

        </>
    )
}
export default Topbar;