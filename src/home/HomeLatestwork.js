import React, {useState, useEffect} from "react";
import HomePortfilo from "./HomePortfilo";
import { BsFillGridFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';


function HomeLatestwork(){
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
            
            });
        
    });
    return(
        <>
        <div className="lates-prt-div">
            <div className="container">
                <h5 className="comon-sub-heading"  data-aos="fade-up">Projects</h5>
                <h1 className="main-haeding"  data-aos="fade-down"> <b> Work </b>
                    <span> Latest </span>
                </h1>
               
                  <HomePortfilo/>
              
            </div>
        </div>

        </>
    );
     
}
export default HomeLatestwork;