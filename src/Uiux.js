import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import Aos from "aos";
import "aos/dist/aos.css";
import ComonTools from "./ComonTools";

function Uiux(){
  document.title ="Marhansolutions - UI/UX Design"

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
          <SubPageBanner name="UI/UX Design" indexpage="Home" indexvisit="/" activepage="UI/UX Design"
            img="images/guid-ecom-uiux.webp" />
         

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
                                  <img src="images/uiuxi1.webp" alt="pnm"/>
                              </figure>
                              </div>
                              <div className="col">
                                  <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> UI/UX </h6>
                                  <h1 className="main-haeding" data-aos="fade-up"> <b>Get the Smart Ideas </b>  <span className="d-block"> <b> For Your </b> Brands </span> </h1>
                                  <h5 className="para-big" data-aos="fade-up">The UI/UX is the key to decide everything about your website.</h5>
                                  <p data-aos="fade-down"> Aesthetics, along with great usability and utility of the website, is the secret of its success. Since the visitor decides everything on your website, a excellent designer understands the 
                                      habit of the customers to deliver the best results for your business. </p>
                      
                                      
                              </div>
                          </div>
          
                          <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                              <div className="col" data-aos="fade-up">
                              <figure>
                                  <img src="images/uiuxi2.webp" alt="pnm"/>
                              </figure>
                              </div>
                              <div className="col">
                              <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> UI/UX </h6>
                              <h1 className="main-haeding" data-aos="fade-up"> <b> How Designing  </b>  <span className="d-block"> <b> Affects Your </b> 
                                  Business? </span> </h1>
                                  <ul className="list-unstyled">
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg>
                                        <span> Helps to grab the attention of the audience.  </span> </li>
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg> 
                                      
                                      <span>  Spikes the rate of conversion by wooing your customers. </span> </li>
                                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg> To improve the user experience further. </li>
                                  </ul>
                      
                                  
                              </div>
                          </div>
          
          
                          <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                              <div className="col" data-aos="fade-up">
                              <figure>
                                  <img src="images/uiuxi3.webp" alt="pnm"/>
                              </figure>
                              </div>
                              <div className="col">
                              <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> UI/UX </h6>
                              <h1 className="main-haeding" data-aos="fade-up"> <b> Why </b>  
                                  Us? </h1>
                                  <ul className="list-unstyled">
                                      <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg>
                                      <span> To get simple but stunning and results-driven designs. </span> </li>
                                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg> 
                                      <span> Creative juices with on-point brand strategy.  </span> </li>
                                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                      </svg> 
                                      <span>  Creative juices with on-point brand strategy. </span> </li>
                                  </ul>
                      
                                  
                              </div>
                          </div>
          
          
                          </div>
                  
                  
                  
                      </div>
                  </div>
  
                  <ComonTools/>
  
                  <div className="comon-service-page">
                      <div className="animate-2 aos-init aos-animate" data-aos="fade-down">
                          <figure>
                            <img src="images/icon-1.png" alt="anm"/>
                          </figure>
                        </div>
                      <div className="container">
                          <div className="row g-lg-5 align-items-center">
                              <div className="col-md-4">
                                  <h6 className="comon-sub-heading aos-init aos-animate" data-aos="fade-down"> UI/UX</h6>
                                  <h1 className="main-haeding aos-init aos-animate" data-aos="fade-up"> <b> Exceptional Creative  </b> <b> Designs & Graphics </b> </h1>
                                  <p> It is an art of creating visual content for communicating the message to your customers. With these typographic and other 
                                      designing tricks, you will be able to meet the specific needs of the users. The focus of this type of 
                                      interactive designing is to display the elements of your business and optimizing the user experience.</p>
                              </div>
                              <div className="col-md-8">
                                  <div className="row row-cols-1 row-cols-sm-2 mt-5 mt-md-0">
                                      <div className="col">
                                          <div className="comon-services aos-init aos-animate" data-aos="fade-up">
                                              <figure>
                                              <img src="images/4507688.png" alt="m"/>
                                              </figure>
                                              <h4> Why It Is Essential? </h4>
                                              <ul className="list-unstyled mt-2">
                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          
          </svg> <span> For creating the identity of your brand.  </span> </li>
                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg> <span> To pique the curiosity of your audience. </span> </li>
                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg> <span> For availing world-className="esigns. </span> </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="comon-services aos-init aos-animate mt-0 mt-lg-5" data-aos="fade-up">
                                              <figure>
                                              <img src="images/1185316.png" alt="m"/>
                                              </figure>
                                              <h4> How Our Designers Can Help You? </h4>
                                              <ul className="list-unstyled mt-2">
                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg> <span> By delivering world-className="utcomes for logo designing, 
                                                      creating banner images, or concocting ads creative. </span> </li>
                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg> <span> By maintaining crystal clear communication with you. </span> </li>
                                                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg> <span> By turning your every idea into something fantastic. </span> </li>
                                              </ul>
                                          </div>
                                      </div>
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
                        <div className="row g-lg-5 align-items-center flex-lg-row-reverse">
                            <div className="col-md-4 col-lg-5">
                                <h6 className="comon-sub-heading aos-init aos-animate" data-aos="fade-down"> UI/UX</h6>
                                <h1 className="main-haeding aos-init aos-animate" data-aos="fade-up"> <b>Build a Stunning  </b> <span> <b> Frameworks  </b>
                                  Designs </span> </h1>
                                <p> It is an art of creating visual content for communicating the message to your customers. With these typographic and other 
                                    designing tricks, you will be able to meet the specific needs of the users. The focus of this type of 
                                    interactive designing is to display the elements of your business and optimizing the user experience.</p>
                            </div>
                            <div className="col-md-8 col-lg-7">
                                <div className="row row-cols-1 row-cols-sm-2 mt-5 mt-md-0">
                                    <div className="col">
                                        <div className="comon-services aos-init aos-animate" data-aos="fade-up">
                                            <figure>
                                            <img src="images/1183723.png" alt="m"/>
                                            </figure>
                                            <h4> React Js </h4>
                                            <p> It is an art of creating visual content for communicating the message to your customers. With these typographic and other designing tricks, you will be able to meet the specific needs of the users.</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="comon-services aos-init aos-animate mt-0 mt-lg-5" data-aos="fade-up">
                                            <figure>
                                            <img src="images/angular.png" alt="m"/>
                                            </figure>
                                            <h4> Angular Js </h4>
                                            <p> It is an art of creating visual content for communicating the message to your customers. With these typographic and other designing tricks, you will be able to meet the specific needs of the users.</p>
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
export default Uiux;