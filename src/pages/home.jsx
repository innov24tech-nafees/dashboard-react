import React from "react";
import Footer from "../components/Footer";
import MenuPages from "../components/MenuPages";
// import { Navbar } from "reactstrap";
import Topbar from "../components/Topbar";
import '../css/input.css';
// import '../js/app';
// import '../js/anychart';


function HomePage() {


    return (

        <>

            <div class="flex wrapper">
                <div class="app-menu scrollable fixed h-screen   overflow-scroll">

                    < MenuPages />
                </div>
                <section class="page-content-all-area w-full">

                    <Topbar />
                    < Footer />
                </section>

            </div>


        </>
    );
}

export default HomePage;