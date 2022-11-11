import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import Aos from "aos";
import "aos/dist/aos.css";

function DigitalMarketing(){
  document.title ="Marhansolutions - DigitalMarketing"
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
        <SubPageBanner name="DigitalMarketing" indexpage="Home" indexvisit="/" activepage="DigitalMarketing"
        img="images/guid-ecom-digitalm.webp" />


        <section className="total-body pt-3 d-block">


                  <div className="uiux-design-page">
              
                      <div className="home-about pb-5 mt-0">
                          <div className="animate-1">
                          <figure data-aos="fade-down" className="aos-init aos-animate">
                              <img src="images/img-slide-landing3.png" alt="anm"/>
                          </figure>
                          </div>
                          <div className="container">
                          
                      
                              <div className="about-main-sec-home mt-0">
                              <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                                  <div className="col" data-aos="fade-up">
                                  <figure>
                                      <img src="images/aboutus2-b-new.png" alt="pnm"/>
                                  </figure>
                                  </div>
                                  <div className="col">
                                      <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> Digital Marketing </h6>
                                      <h1 className="main-haeding" data-aos="fade-up"> <b>Organic Advertising </b> </h1>
                                      <h5 className="para-big" data-aos="fade-up">Organic marketing is similar to the good old word of mouth advertising strategy. </h5>
                                      <p data-aos="fade-down"> The approaches of this marketing strategy don’t rely on the tools or the techniques that are paid.
                                        Through careful attention to your content and curation of your social media presence,
                                        this strategy builds a robust system that leads to your success. </p>
                          
                                          
                                  </div>
                              </div>
              
                              <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                                  <div className="col" data-aos="fade-up">
                                  <figure>
                                      <img src="images/seo.webp" alt="pnm"/>
                                  </figure>
                                  </div>
                                  <div className="col">
                                  <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> Digital Marketing </h6>
                                  <h1 className="main-haeding" data-aos="fade-up"> <b> Why You </b>   Need it? 
                                        </h1>
                                      <ul className="list-unstyled">
                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                            </svg>
                                            <span> To have a connection with your customers.  </span> </li>
                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                          </svg> 
                                          
                                          <span> To make your online presence stronger. </span> </li>
                                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                          </svg> To enhance the reputation of your brand. </li>
                                      </ul>
                          
                                      
                                  </div>
                              </div>
              
              
                              <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center mt-4">
                                  <div className="col" data-aos="fade-up">
                                  <figure>
                                      <img src="images/digi.webp" alt="pnm"/>
                                  </figure>
                                  </div>
                                  <div className="col">
                                  <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> Digital Marketing </h6>
                                  <h1 className="main-haeding" data-aos="fade-up"> <b> Why </b>  
                                      Us? </h1>
                                      <ul className="list-unstyled">
                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                          </svg>
                                          <span> To steer your company in the right direction. </span> </li>
                                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                          </svg> 
                                          <span> To generate awareness, traffic, and leads for your website with our robust knowledge in SEO, SMO, and ORM.  </span> </li>
                                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                          </svg> 
                                          <span>  To create a strong online presence for your business </span> </li>
                                      </ul>
                          
                                      
                                  </div>
                              </div>
              
              
                              </div>
                      
                      
                      
                          </div>
                      </div>
              
              
              
                      <div className="comon-service-page mt-0">
                          <div className="animate-2 aos-init aos-animate" data-aos="fade-down">
                              <figure>
                                <img src="images/icon-1.png" alt="anm"/>
                              </figure>
                            </div>
                          <div className="container">
                              <div className="row g-lg-5 align-items-center">
                                  <div className="col-md-4">
                                      <h6 className="comon-sub-heading aos-init aos-animate " data-aos="fade-down"> Digital Marketing </h6>
                                      <h1 className="main-haeding aos-init aos-animate" data-aos="fade-up"> <b>Paid Marketing </b> </h1>
                                      <p>With the paid advertising method, you can not only choose the information and its method of circulation but also the audience who 
                                        gets it. This marketing system allows you to curate and create a 
                                        strong image of your business and your brand among your audience.</p> 
                                      
                                  </div>
                                  <div className="col-md-8">
                                      <div className="row row-cols-1 row-cols-sm-2 mt-5 mt-md-0">
                                          <div className="col">
                                              <div className="comon-services aos-init aos-animate" data-aos="fade-up">
                                                  <figure>
                                                  <img src="images/2065064.png" alt="m"/>
                                                  </figure>
                                                  <h4> Why You Need it? </h4>
                                                  <ul className="list-unstyled mt-2">
                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              
              </svg> <span> To spread the brand awareness beyond.  </span> </li>
                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg> <span> To endorse your products better to a targeted audience. </span> </li>
                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg> <span> To drive more traffic to your website. </span> </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="col">
                                              <div className="comon-services aos-init aos-animate mt-0 mt-lg-5" data-aos="fade-up">
                                                  <figure>
                                                  <img src="images/2222414.png" alt="m"/>
                                                  </figure>
                                                  <h4> Why Choose Us? </h4>
                                                  <ul className="list-unstyled mt-2">
                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg> <span> To ensure your every penny is being utilized. </span> </li>
                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg> <span> 
                For relevant ads for your audience. </span> </li>
                                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg> <span> 
                To touch better ROI every time. </span> </li>
                                                  </ul>
                                              </div>
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
export default DigitalMarketing;