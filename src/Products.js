import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import Aos from "aos";
import "aos/dist/aos.css";

function Products(){
  document.title ="Marhansolutions - Products"
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
        <SubPageBanner name="Products" indexpage="Home" indexvisit="/" activepage="Products"
        img="images/guid-ecom-crm-admin.webp" />

        <section className="total-body pt-3 d-block">
              <div className="products-page-total-page">
                <h1 className="main-haeding text-center" data-aos="fade-down"> <b> Build With Amazing </b> All Features</h1>
                  <div className="products-divb-top mt-5">
          
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
                          <div className="row comon-products-div2">
                              <div className="col-md-7">
                                  <figure className="m-0">
                                      <img src="images/slider-7-1.png" alt="pmg"/>
                                      <a data-fancybox href="images/prodcuts/hospit.png" className="mdoal-pic">
                                        <img src="images/prodcuts/hospit.png" alt="pso"/>
                                        <span className="hover-zoomm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                            </svg>
                                        </span>  
                                      </a>
                                      
                                  </figure>
                                  
                              </div>
                              <div className="col-md-5">
                                    <h4> Hospital Management System </h4>
                                    <ul className="list-unstyled">
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg>  <span>  Manage Indoor, Outdoor Patients. </span> </li>
          
                                        <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg>  <span>  Extensive Doctors, Pathologist, Pharmasist, Radiologist Profile. </span> </li>
          
                                        <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg>  <span>  Indoor, Outdoor Billing With PMS. </span> </li>
          
          
                                    </ul>
                                    <button type="button" className="buy-now-btn aos-init aos-animate" name="button" data-aos="fade-down"> 
                                      purchase Now
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                      </svg> </button>
                              </div>
                          </div>
          
                          <div className="row comon-products-div2">
                              <div className="col-md-7">
                                  <figure className="m-0">
                                    <img src="images/slider-7-1.png" alt="pmg"/>
                                    <a data-fancybox href="images/prodcuts/pharmacy.png" className="mdoal-pic">
                                        <img src="images/prodcuts/pharmacy.png" alt="pso"/>
                                        <span className="hover-zoomm">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                          </svg>
                                        </span>  
                                    </a>
                                    
                                  </figure>
                                
                              </div>
                              <div className="col-md-5">
                                  <h4> Pharmacy Management System </h4>
                                  <ul className="list-unstyled">
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg>  <span>  Manages Retail Products And Medications. </span> </li>
          
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg>  <span>  Automates Operations Such As Stock Control, Drug Dispensing, Claims Management, Billing, And Reporting. </span> </li>
          
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg>  <span>  Adequate Support In Medication Orders, Clinical Distribution And Inventory Management. </span> </li>
          
          
                                  </ul>
                                  <button type="button" className="buy-now-btn aos-init aos-animate" name="button" data-aos="fade-down"> 
                                    purchase Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg> </button>
                              </div>
                          </div>
          
                          <div className="row comon-products-div2">
                              <div className="col-md-7">
                                  <figure className="m-0">
                                    <img src="images/slider-7-1.png" alt="pmg"/>
                                    <a data-fancybox href="images/prodcuts/staff-management.png" className="mdoal-pic">
                                        <img src="images/prodcuts/staff-management.png" alt="pso"/>
                                        <span className="hover-zoomm">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                          </svg>
                                        </span>  
                                    </a>
                                    
                                  </figure>
                                
                              </div>
                              <div className="col-md-5">
                                  <h4> School Management </h4>
                                  <ul className="list-unstyled">
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg>  <span>  Consist Student Record With Admission, Personal, Contact, Fees, Exam And Document. </span> </li>
          
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg>  <span>  Smart Teacher, Parent & Front Office Profiles.</span> </li>
          
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg>  <span>  Manage All Fees, School Income, Zoom Live className=". </span> </li>
          
          
                                  </ul>
                                  <button type="button" className="buy-now-btn aos-init aos-animate" name="button" data-aos="fade-down"> 
                                    purchase Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg> </button>
                              </div>
                          </div>
                          
                      </div>
                  </div>
          
          
              </div>
    
    
    
    
    
    
    
      
    
        </section>
        </>
    );
}
export default Products;