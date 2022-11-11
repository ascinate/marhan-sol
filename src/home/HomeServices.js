import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


function HomeServices(){
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
        <div className="srs-div">
          <div className="row g-lg-5 align-items-center">
                <div className="col-md-4 col-lg-5">
                    <h5 className="comon-sub-heading" data-aos="fade-up">Services</h5>
                    <h1 className="main-haeding" data-aos="fade-down"> <b> Best Solutions </b>
                        <span className="d-block"> for You </span>
                    </h1>
                    <p data-aos="fade-up"> Marhan Solution is a leading web development company based in India, offering all kinds of web applications. We use cutting edge technologies, advanced frameworks and proven methodologies to ensure that our solutions are future-ready and scalable. </p>
                    <NavLink to="/contact" className="buy-now-btn d-none d-lg-flex align-items-center btn services-btn1" data-aos="fade-up"> 
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                        </svg> 
                    </NavLink>
                </div>
            <div className="col-md-8 col-lg-7">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 home-servives align-items-center">
                        <div className="col">
                            <NavLink to="/uiux" className="comon-services"  data-aos="fade-up">
                                <figure>
                                    <img src="images/4048663.png" alt="m"/>
                                </figure>
                                <h4> UI/UX Design </h4>
                                <p> RBAJ Sol has an impressive portfolio of Art & Design created for Websites & Mobile App.</p>
                            </NavLink>

                            <NavLink to="/webdevelopment" className="comon-services mt-4" data-aos="fade-down">
                                <figure>
                                <img src="images/3757874.png" alt="m"/>
                                </figure>
                                <h4> Web Development </h4>
                                <p> Website Development includes a blend of modern technology & creative abilities.</p>
                            </NavLink>
                        </div>


                        <div className="col">
                            <NavLink to="/digitalmarketing" className="comon-services" data-aos="fade-up">
                                <figure>
                                <img src="images/2222414.png" alt="m"/>
                                </figure>
                                <h4> Digital Marketing </h4>
                                <p> Digital Marketing helps in channelizing marketing activities through the internet.</p>
                            </NavLink>

                            <NavLink to="/appdevelopment" className="comon-services"  data-aos="fade-down">
                            <figure>
                                <img src="images/3934272.png" alt="m"/>
                            </figure>
                            <h4> APP Development </h4>
                            <p> RBAJ Sol has an impressive portfolio of Art & Design created for Websites & Mobile App.</p>
                            </NavLink>

                            <NavLink to="/crmdevelopment" className="comon-services"  data-aos="fade-up">
                            <figure>
                                <img src="images/8010516.png" alt="m"/>
                            </figure>
                            <h4> CRM Development </h4>
                            <p> Providing various CRM Solutions for the Business need such as Travel, Warehouse, Hospital etc.</p>
                            </NavLink>

                        </div>

                  


                </div>

              <button type="button" className="buy-now-btn d-block d-lg-none" name="button" data-aos="fade-up"> 
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                </svg> </button>

            </div>
          </div>
        </div>
        </>
    )
}

export default HomeServices;