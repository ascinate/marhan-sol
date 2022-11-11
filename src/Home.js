import React,{useEffect } from "react";
import { NavLink } from "react-router-dom";
import AboutHomeSection from "./home/AboutHomeSection";
import HomeServices from "./home/HomeServices";
import WorkCount from "./home/WorkCount";
import Plans from "./home/Plans";
import HomeProducts from "./home/HomeProducts";
import HomeTools from "./home/HomeTools";
import IndustriesSlid from "./home/IndustriesSlid";
import Testimonial from "./home/Testimonial";
import HomeLatestwork from "./home/HomeLatestwork";
import Banner from "./home/Banner";
import Aos from "aos";
import "aos/dist/aos.css";

function Home (){
  document.title ="Marhansolutions - Home";
   useEffect(() => {
    Aos.init({
        offset: 20,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });
      window.scrollTo(0, 0)
    });
    return(
        <>
        <Banner/>
         <section className="total-body pt-3 d-block">

                <div className="container">
                   
                    <HomeTools/>

                </div>

                

                <AboutHomeSection/>

                <div className="services-div-part">
                    <div className="animate-2" data-aos="fade-down">
                        <figure>
                        <img src="images/icon-1.png" alt="anm"/>
                        </figure>
                    </div>
                    <div className="container">
                        <HomeServices/>
                        <HomeLatestwork/>
                        <WorkCount/>

                        <IndustriesSlid/>
                    </div>
                </div>

                <Testimonial/>

                <Plans/>
                

                <HomeProducts/>

                
         </section>
        </>
    );
}
export default Home;