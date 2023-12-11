import React from "react";

function ProgressLine(props) {

    return (

        <>
       <div className="lg:w-1/4 md:w-1/2 p-3 w-full">
                        <a className="block relative rounded overflow-hidden">
                            <div className="p-6 bg-white h-44 total-revenue rounded">
                                <div className="flex items-center justify-between pb-6">
                                    <h4 className="card-title">{props.Heading}</h4>

                                    <div className="z-10">
                                        <button className="dropdown-revenue-cl " type="button">
                                        
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </button>

                                        <div id="dropdown-target1"
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


                                <div className="flex items-center justify-between ">
                                    <div dir="ltr" className="card w-full h-2">
                                        <div className="flex justify-around gap-x-6 pb-2">

                                            <div  style={{ backgroundColor: props.Color }}
                                                className=" m-auto h-5 w-16 text-white rounded-full text-xs px-2 py-0.5">
                                                {props.Percent}
                                    
                                                <i className="fa-solid fa-arrow-trend-up"></i>
                                            </div>
                                            <div className="text-end ">
                                                <h2
                                                    className="total-revenue revenue-nub text-3xl font-normal text-gray-800 dark:text-white mb-1">
                                                    {props.Value}
                                                </h2>
                                                <p className="text-gray-400 font-normal">Revenue today</p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                            <div style={{ backgroundColor: props.Color, height:props.Height }} className=" h-2.5 rounded-full w-3/4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
              </>
    )
}
export default ProgressLine;