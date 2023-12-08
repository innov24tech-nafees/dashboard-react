import React from "react";
import userS from '../img/user-11.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
// import Icons from "../SubComponents/Icons";

function TimeDuration(props) {

    return (

        <>
            <div className="p-3 md:w-1/4 sm:w-1/2 w-full ">
                <div style={{background: "#3e3c3cbd"}}
                    className="total-revenue py-8  max-w-sm mx-auto bg-indigo-800 bg-opacity-70 rounded shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 duration-logo">
                    {/* <i  className="fa-brands fa-telegram text-white block mx-auto w-12 rounded-full sm:mx-0 sm:shrink-0  text-4xl "
                        alt="logo"> </i> */}
                        {props.Icons}
                    <div style={{marginLeft: "0"}} className=" space-y-2 duration-card">
                        <div className="space-y-0.5">
                            <h5 className="text-white text-sm dark:text-white mb-1 ">
                                {props.DurationHeading}
                            </h5>
                            <p className="mb-2 text-white text-lg font-bold  truncate">
                                {props.DurationValue}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default TimeDuration;