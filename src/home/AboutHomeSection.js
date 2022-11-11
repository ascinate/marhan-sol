import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";


function AboutHomeSection(){
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
        <div className="home-about py-5">
                <div className="about-main-sec-home">
                     <div className="container">
                        <div className="row row-cols-1 row-cols-md-2  g-lg-5 align-items-center">
                            <div className="col" data-aos="fade-up">
                                <figure>
                                    <img src="images/aboutus2-b-new.webp" alt="pnm"/>
                                </figure>
                            </div>
                            <div className="col">
                                <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> About Us </h6>
                                <h1 className="main-haeding" data-aos="fade-up"> <b> Get  Solution </b> <span> For <b> Your </b>  Business  </span> </h1>
                                <h5 className="para-big" data-aos="fade-up">We will create an attractive, informative and functional solution.</h5>
                                <p> We will assemble a team of creative designers, marketing experts, gifted technical writers, experienced programmers and top-class managers. Together, they will work with you so that the desired results can be achieved as quickly as possible. We desires nothing more than the complete satisfaction of our clients by providing unique solutions to your needs, according to your specifications. </p>
                                <NavLink to="/about" className="buy-now-btn btn about-btn"  data-aos="fade-down"> 
                                    More About Us
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg> 
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}
export default AboutHomeSection;
