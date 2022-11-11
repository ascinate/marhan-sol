import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function SubPageBanner(props){
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
        <section className="sub-page-banner new-add sub-banner">
 
                <div className="container">
                
                    <div className="red-dots cms-dots"></div>
                    <div className="y-dots cms-dots"></div>
                    <div className="b-dots cms-dots"></div>
                    <div className="red-dots2 cms-dots"></div>

                    <div className="row align-items-center flex-column-reverse flex-lg-row">
                        <div className="col-lg-5 content-div2">
                        
                        <h1 data-aos="fade-up"> {props.name} </h1>
                        <nav aria-label="breadcrumb mt-1" data-aos="fade-down">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <NavLink to={props.indexvisit}>{props.indexpage}</NavLink>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page"> {props.activepage} </li>
                            </ol>
                        </nav>

                        <button type="button" className="buy-now-btn" name="button" data-aos="fade-up">  Get A Free Quote 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                            </svg> </button>
                        </div>
                        <div className="col-lg-7">
                        <figure className="m-0 sub-new2" data-aos="fade-down">
                            <img src={props.img}/>
                        </figure>
                        </div>
                    </div>
                    
                    
                </div>

    
       </section>
        </>
    );
}
export default SubPageBanner;