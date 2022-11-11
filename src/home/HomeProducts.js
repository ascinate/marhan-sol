import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Fancybox from "./Fancybox";
import { NavLink } from "react-router-dom";
import { BsArrowRight, BsCart2, BsFillXDiamondFill,BsArrowUpRightSquare } from "react-icons/bs";

function HomeProducts(){
      
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
           <div className="blogs-div-part">
              <div className="container">
                    <h5 className="text-center comon-sub-heading"  data-aos="fade-up"> Products </h5>
                    <h2 className="text-center main-haeding"  data-aos="fade-down"> <b> Our </b> Products </h2>
                    <Fancybox options={{ infinite: false }}>
                        <div className="row row-cols-1 row-cols-md-3 gx-lg-5 mt-5">
                                <div className="col"  data-aos="fade-up">
                                    <div  className="comon-post">
                                
                                            <button data-fancybox="gallery" data-src="images/prodcuts/pharmacy.png">
                                                <figure>
                                                
                                                <img src="images/materialpro-vuejs-dashboard-template-20.webp" alt="pn"/>
                                                <span className="hover-zoom">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                                    </svg>
                                                </span>
                                                </figure> 
                                            </button>
                                            <h5>Pharmacy Management </h5>
                                            <ul className="list-unstyled">
                                               <li>
                                                 <BsFillXDiamondFill/>  Manage Indoor, Outdoor Patients.
                                               </li>
                                               <li>
                                                <BsFillXDiamondFill/> Indoor, Outdoor Billing With PMS.
                                               </li>
                                            </ul>
                                            <NavLink to="/contact" className="buy-now-btn btn purchec-btn"> 
                                            View Details <BsArrowUpRightSquare/>
                                            </NavLink>
                                    </div>
                                </div>

                                <div className="col"  data-aos="fade-down">
                                    <div  className="comon-post">
                                        
                                        <button data-fancybox="gallery" data-src="images/prodcuts/hospit.png">
                                        <figure>
                                            <img src="images/po.jpg" alt="pn"/>
                                            <span className="hover-zoom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                            </svg>
                                            </span>
                                        </figure> 
                                        </button>
                                        <h5>Hospital Management </h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <BsFillXDiamondFill/>  Manages Retail Products.
                                            </li>
                                            <li>
                                            <BsFillXDiamondFill/> Automates Operations Such..
                                            </li>
                                        </ul>
                                        
                                        <NavLink to="/products"  className="buy-now-btn btn purchec-btn">  
                                        View Details <BsArrowUpRightSquare/>
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col"  data-aos="fade-up">
                                    <div className="comon-post">
                                        <button data-fancybox="gallery" data-src="images/prodcuts/staff-management.png">
                                        <figure>
                                            <img src="images/ps3.jpg" alt="pn"/>
                                            <span className="hover-zoom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                            </svg>
                                        </span>
                                        </figure> 
                                        </button>
                                        <h5>School Management </h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <BsFillXDiamondFill/>  Smart Teacher, Parent & Front..
                                            </li>
                                            <li>
                                            <BsFillXDiamondFill/> Manage All Fees, School Income..
                                            </li>
                                        </ul>
                                        <NavLink to="/products"  className="buy-now-btn btn purchec-btn"> 
                                           View Details <BsArrowUpRightSquare/>
                                        </NavLink>
                                    </div>
                                </div>


                        </div>
                    </Fancybox>
              </div>
          </div>
        </>
    )
}
export default HomeProducts;