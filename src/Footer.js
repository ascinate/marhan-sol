import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter,FaPaperPlane, FaInstagram,FaFacebookF, FaMapMarkerAlt,FaWhatsapp,FaConciergeBell,FaRegClock, FaGooglePlusG } from "react-icons/fa";
import { BsFillArrowLeftSquareFill, BsArrowDownShort,BsXCircleFill } from "react-icons/bs";

function Footer(){
    return(
       <>
       <footer className="float-start w-100">

            <div className="haveprojects-div">
                <div className="container">
                    <div className="inside-projects"  data-aos="fade-down">
                        <h2>Have A Project In Mind? 
                        <span className="d-block">Let's Get To Work. </span> </h2>
            
                        <button type="button" data-bs-toggle="modal" data-bs-target="#projectmodal" className="buy-now-btn" name="button"  data-aos="fade-up"> 
                        Get Started Now <FaPaperPlane/>
                        </button>
            
                    
                    </div>
                </div>
            </div>
     
            <div className="footer-main">
                <hr className="ft-hr mb-5"/>
                <div className="container">
                
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 footer-bottom-div " >
                    <div className="col">
                        <div className="comon-footer">
                        <h5 className="comon-footer-haed"> Contact Us </h5>
                        <p className="call-ft"> 
                            <span> <i className="fas fa-phone-alt"></i> </span> +91-9073089377 </p>
                            <p className="addredd"> 
                            37 Elgar Rd, Box Hill South, VIC 3127 Australia
                            </p>
                            <p className="addredd"> 
                            support@marhansolutions.com
                            </p>
                            
                            
                        </div>
                    </div>
            
                    <div className="col">
                        <div className="comon-footer d-lg-grid justify-content-lg-center">
                        <h5 className="comon-footer-haed"> Quick Link </h5>
                        <ul className="list-unstyled cont-para">
                            <li> 
                            <NavLink to="/products"> Products </NavLink>
                            </li>
                            <li> 
                            <NavLink to="/uiux"> UI/ UX Design </NavLink>
                            </li>
                            <li> 
                             <NavLink to="/webdevelopment"> Web Development </NavLink>
                            </li>
                            <li> 
                            <NavLink to="/digitalmarketing"> Digital Marketing </NavLink>
                            
                            </li>
                            <li> 
                            <NavLink to="/appdevelopment"> Apps Development  </NavLink>
                            
                            </li>
                            <li> 
                            <NavLink to="/crmdevelopment"> CRM Development  </NavLink>
                            
                            </li>
                        </ul>
                        </div>
                    </div>
            
                    <div className="col">
                        <div className="comon-footer d-lg-grid justify-content-lg-center">
                        <h5 className="comon-footer-haed"> Support </h5>
                        <ul className="list-unstyled cont-para">
                            <li> 
                              <NavLink to="/about"> About </NavLink>
                            </li>
                           
                            <li> 
                              <NavLink to="/termsconditions"> Terms & Conditions </NavLink>
                            
                            </li>
                            <li> 
                              <NavLink to="/privacypolicy"> Privacy & Policy </NavLink>
                            
                            </li>
                            
                            <li> 
                              <NavLink to="/contact"> Contact  </NavLink>
                            
                            </li>
                        </ul>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="comon-footer">
                        <h5 className="comon-footer-haed"> Newletters </h5>
                        <p className="nes-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="form-group serb-div justify-content-between d-flex align-items-center">
                            <input type="text" className="form-control" placeholder="Your Email"/>
                            <button className="btn subcribe-btn">Subscribe </button>
                            </div>
                        
                        </div>
                    </div>
                    
                    
                    </div>
                </div>
            
            
                <div className="container mt-5 copy-text">
                    <div className="d-flex justify-content-between flex-column-reverse flex-md-row align-items-center">
                        <div className="text-center d-md-flex align-items-center">
                        <NavLink to="/" className="me-md-4 my-4 my-md-0 d-block d-md-inline"> <img src="images/footer-logo1.svg" alt="logo"/> </NavLink>
                        2022-2023 © marhan. All Rights Reserved. </div>
                    
                        <ul className="list-unstyled socal m-0">
                        <li> 
                          <NavLink to="/"> <FaFacebook/> </NavLink>   
                          <NavLink to="/">  <FaTwitter/> </NavLink>
                          <NavLink to="/">  <FaInstagram/> </NavLink>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </div>

        </footer>



        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header py-0">
                    <button type="button" className="close-menu" data-bs-dismiss="offcanvas" aria-label="Close">
                       <BsFillArrowLeftSquareFill/>
                    </button>
                </div>
                <div className="offcanvas-body">
                <div className="head-contact d-none d-lg-block">
                    <NavLink to="/" className="logo-side">
                       <img src="images/footer-logo1.svg" alt="logo"/>
                    </NavLink>
                    <p className="mt-3 mb-4"> We are a professional web & app development company based in India and provide offshore outsourcing services with complete 100% satisfaction.
                    </p>
                    <div className="quick-link">
                        <ul>
                            <li> <FaMapMarkerAlt/> <span> 37 Elgar Rd, Box Hill South, VIC 3127 Australia </span> </li>
                            <li> <FaWhatsapp/> <span> +91-9073089377 </span>  </li>
                            <li> <FaConciergeBell/> <span> support@marhansolutions.com </span> </li>
                            <li> <FaRegClock/> <span> 10:00 - 17:00 </span> </li>
                        </ul>
                    </div>
                    <ul className="side-media">
                        <li> <NavLink to="/"> <FaFacebookF/> </NavLink> </li>
                        <li> <NavLink to="/">  <FaTwitter/> </NavLink> </li>
                        <li> <NavLink to="/">  <FaGooglePlusG/> </NavLink> </li>
                        <li> <NavLink to="/">  <FaInstagram/> </NavLink> </li>
                    </ul>
                </div>
                <div className="head-contact d-block d-lg-none">
                    <NavLink to="/" className="logo-side">
                       <img src="images/footer-logo1.svg" alt="logo"/>
                    </NavLink>
                    
                    <div className="mobile-menu-sec mt-3">
                        <ul>
                            <li className="active-m" data-bs-dismiss="offcanvas">
                               <NavLink to="/"> Home </NavLink>
                            </li>
                          
                            <li>
                            <div className="dropdown">
                                <button className="btn d-flex align-items-center justify-content-between pr-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Services <BsArrowDownShort/>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/uiux">UI / UX Designing</NavLink></li>
                                    <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/webdevelopment">Web Development</NavLink></li>
                                    <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/appdevelopment">APP Development</NavLink></li>
                                    <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/digitalmarketing">Digital Marketing</NavLink></li>
                                    <li data-bs-dismiss="offcanvas"> <NavLink className="dropdown-item" to="/crmdevelopment">CRM Development</NavLink></li>
                                </ul>
                            </div>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                              <NavLink className="nav-link" to="/portfolio"> Portfolio </NavLink>
                            </li>

                            <li>
                            <div className="dropdown">
                                <button className="btn d-flex align-items-center justify-content-between pr-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Company <i className="fas fa-sort-down"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/about">About</NavLink></li>
                                    <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/about">Web Development</NavLink></li>
                                    <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/privacypolicy"> Privacy Policy </NavLink></li>
                                    <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/termsconditions"> Terms & Conditions </NavLink></li>
                                    <li data-bs-dismiss="offcanvas"> <NavLink className="dropdown-item" to="/disclaimer">  Disclaimer </NavLink> </li>
                                    
                                </ul>
                            </div>
                            </li>
                            
                            <li data-bs-dismiss="offcanvas">
                               <NavLink to="/Contact"> Contact  </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="quick-link">
                        <ul>
                            <li> <FaWhatsapp/> <span> +91-9073089377 </span>  </li>
                            <li> <FaConciergeBell/> <span> support@marhansolutions.com </span> </li>
                        </ul>
                    </div>
                    <ul className="side-media">
                        <li> <NavLink to="/"> <FaFacebookF/> </NavLink> </li>
                        <li> <NavLink to="/">  <FaTwitter/> </NavLink> </li>
                        <li> <NavLink to="/">  <FaGooglePlusG/> </NavLink> </li>
                        <li> <NavLink to="/">  <FaInstagram/> </NavLink> </li>
                    </ul>
                </div>
                </div>
        </div>


       <div className="modal fade total-qucik" id="enqmodal" tabindex="2" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header d-none">
                        <h5 className="modal-title" id="exampleModalLabel">Please fill </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i className="far fa-window-close"></i> </button>
                    </div>
                    <div className="modal-body">
                    <button type="button" className="comon-close-1" data-bs-dismiss="modal" aria-label="Close">
                    <BsXCircleFill/> </button>
                        <div className="quick-form-sec">
                        <h5 className="text-center mb-4"> Please fill out the form below and <span className="d-block"> we will get back to you as soon as possible.</span> </h5>
                        <div className="inside-fm">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Total experience"/>
                            </div>
                            <div className="form-group">
                               
                               <input className="form-control" type="file" placeholder="" id="formFile"/>
                            </div>
                            <div className="form-group">
                               
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Apply for job Position</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                           <div className="form-group">
                                <textarea className="form-control" placeholder="Message"></textarea>
                            </div>
                            <button className="btn submit-bn-1"> Submit </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="modal fade total-qucik" id="projectmodal" tabindex="2" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header d-none">
                        <h5 className="modal-title" id="exampleModalLabel">Please fill </h5>
                       
                    </div>
                    <div className="modal-body">
                    <button type="button" className="comon-close-1" data-bs-dismiss="modal" aria-label="Close">
                    <BsXCircleFill/> </button>
                        <div className="quick-form-sec">
                        <h5 className="text-center mb-4"> Please fill out the form below and <span className="d-block"> we will get back to you as soon as possible.</span> </h5>
                        <div className="inside-fm">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Project Name"/>
                            </div>
                            <div className="form-group">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Project Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Project Details"></textarea>
                            </div>
                            <button className="btn submit-bn-1"> Submit </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}
export default Footer;