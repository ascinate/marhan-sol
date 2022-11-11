import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import { FaPhoneAlt, FaComments, FaFax } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact(){
  document.title ="Marhansolutions - Contact"

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
        <div className="about-sub">
            <SubPageBanner name="Contact Us" indexpage="Home" indexvisit="/" activepage="Contact Us" img="images/contact-ban-m.webp" />
        </div>

          <section className="total-body pt-3 d-block">

              <div className="contact-page-design comon-services-pge">

                  <div className="animate-1">
                  <figure data-aos="fade-down" className="aos-init aos-animate">
                      <img src="images/img-slide-landing3.png" alt="anm"/>
                  </figure>
                  </div>
          
                  <div className="animate-2 aos-init aos-animate" data-aos="fade-down">
                  <figure>
                      <img src="images/icon-1.png" alt="anm"/>
                  </figure>
                  </div>
   
                  <div className="container">
                      
                      <div className="row g-lg-5">
                          <div className="col-md-4 cm-text-n" data-aos="fade-up">
                              
                              <ul className="list-unstyled mt-4">
                                  <li className="d-flex">
                                    <span className="icon-c"> <FaPhoneAlt/> </span> 
                                    <span className="text-c">  Call Us 
                                      <small className="d-block">    +91-9073089377  </small> 
                                    </span>
                                  </li>
                                  <li className="d-flex">
                                    <span className="icon-c"> <FaComments/> </span> 
                                    <span className="text-c">  
                                        Email: 
                                      <small className="d-block">   support@marhansolutions.com  </small> 
                                    </span>
                                  </li>
                                  <li className="d-flex">
                                    <span className="icon-c"> <FaFax/> </span> 
                                    <span className="text-c"> Address: 
                                      <small className="d-block"> 37 Elgar Rd, Box Hill South, VIC 3127 Australia </small> 
                                    </span>
                                  </li>
                              </ul>
                              
                          </div>
                          <div className="col-md-8" data-aos="fade-down">
                              <div className="conatct-form-div mb-5">
                                  <h6 className="mb-0 comon-sub-heading">Tell Me More About Your Project</h6>
                                  <h2 className="main-haeding"> <b> Let's Work </b> Together </h2>
                                  <div className="row mt-4">
                                      <div className="col-lg-6">
                                            <div className="form-group">
                                              <input type="text" className="form-control" placeholder="Name"/>
                                            </div>
                                          
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="form-group">
                                              <input type="text" className="form-control" placeholder="Email"/>
                                          </div>
                                        
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="form-group">
                                              <input type="text" className="form-control" placeholder="Phone"/>
                                          </div>
                                        
                                      </div>
                                      <div className="col-lg-6">
                                      <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Subject"/>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                          <textarea className="form-control" placeholder="Message"></textarea>
                                      </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                      <button type="button" className="buy-now-btn" name="button"  data-aos="fade-up"> 
                                          Send Message <i className="far fa-paper-plane"></i>
                                          </button>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                            
                  </div>
       
              </div>

          </section>
        </>
    );
}
export default Contact;