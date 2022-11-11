import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function Plans(){
      
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
        <div className="afotable-part-div">
                <div className="container">
                    <h5 className="text-center comon-sub-heading"  data-aos="fade-up"> Pricing Plans </h5>
                    <h2 className="text-center main-haeding"  data-aos="fade-down"> <b> Affordable </b> Price </h2>
                    <div className="row row-cols-1 row-cols-md-3 mt-5 justify-content-center mn-plans">
                    <div className="col">
                        <div className="comon-plans"  data-aos="fade-up">
                                <figure>
                                <img src="images/4503772.png" alt="nm"/>
                                </figure>
                                <h6 className="pl-titel"> Personal </h6>
                                <h2><sup> $ </sup> 100 <sub> /  month</sub></h2>
                                <ul className="list-unstyled">
                                    <li>
                                    Lorem Ipsum is simply
                                    </li>
                                    <li>
                                    Contrary to popular belief, Lorem Ipsum 
                                    </li>
                                </ul>
        
                                <NavLink to="/contact" className="buy-now-btn btn get-start" name="button"> 
                                Get Started Now
                                </NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <div className="comon-plans"  data-aos="fade-down">
                            <h6 className="popluar-plans-text">Popular</h6>
                            <figure>
                                <img src="images/5754063.png" alt="nm"/>
                            </figure>
                            <h6 className="pl-titel"> Advanced </h6>
                            <h2><sup> $ </sup> 120 <sub> /  month</sub></h2>
                            <ul className="list-unstyled">
                                <li>
                                Lorem Ipsum is simply
                                </li>
                                <li>
                                Contrary to popular belief, Lorem Ipsum 
                                </li>
                            </ul>
        
                            <NavLink to="/contact" className="buy-now-btn btn get-start" name="button"> 
                            Get Started Now
                            </NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <div className="comon-plans"  data-aos="fade-up">
                            <figure>
                                <img src="images/5247391.png" alt="nm"/>
                            </figure>
                            <h6 className="pl-titel"> premium </h6>
                            <h2><sup> $ </sup> 150 <sub> /  month</sub></h2>
                            <ul className="list-unstyled">
                                <li>
                                Lorem Ipsum is simply
                                </li>
                                <li>
                                Contrary to popular belief, Lorem Ipsum 
                                </li>
                            </ul>
        
                            <NavLink to="/contact" className="buy-now-btn btn get-start" name="button"> 
                            Get Started Now
                            </NavLink>
                        </div>
                    </div>
        
                    </div>
        
                    
                </div>
         </div>
        </>
    );
}
export default Plans;