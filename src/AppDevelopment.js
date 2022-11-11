import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import Aos from "aos";
import "aos/dist/aos.css";
import ComonTools from "./ComonTools";

function AppDevelopment(){
  document.title ="Marhansolutions - Apps Development"

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
        <SubPageBanner name="Apps Development" indexpage="Home" indexvisit="/" activepage="Apps Development"
        img="images/guid-1-apps.webp" />

        <section className="total-body pt-3 d-block">
          <div className="apps-d-design-page">

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
                                      <img src="images/aps1.webp" alt="pnm"/>
                                  </figure>
                                  </div>
                                  <div className="col">
                                      <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> APP Development </h6>
                                      <h1 className="main-haeding" data-aos="fade-up"> <b> We Build </b> Your <span className="d-block"> <b>
                                          Apps    </b>   Userfriendly </span> </h1>
                                      <h5 className="para-big" data-aos="fade-up">These applications are the only way for businesses to acquire grounds in both 
                                          android and ios mobile platforms.</h5>
                          
                                          
                                  </div>
                              </div>


                          </div>


                          <div className="comon-service-page mt-3">
                              <div className="animate-2 aos-init aos-animate" data-aos="fade-down">
                                  <figure>
                                    <img src="images/icon-1.png" alt="anm"/>
                                  </figure>
                                </div>
                              <div className="container">
                                  <div className="row g-lg-5 align-items-center ">
                                      <div className="col-md-4 col-lg-5">
                                          <h6 className="comon-sub-heading aos-init aos-animate" data-aos="fade-down"> APP Development</h6>
                                          <h1 className="main-haeding aos-init aos-animate" data-aos="fade-up"> <b> Hybrid Application </b> </h1>
                                          <p> If you blend the goodness of the native and web applications, then the end product will be a hybrid app. The agility and 
                                              cost-effectiveness of these apps have made it popular among businesses. </p>
                                      </div>
                                      <div className="col-md-8 col-lg-7">
                                          <div className="row row-cols-1 row-cols-md-2">
                                              <div className="col">
                                                  <div className="comon-services aos-init aos-animate" data-aos="fade-up">
                                                      <figure>
                                                      <img src="images/2664673.png" alt="m"/>
                                                      </figure>
                                                      <h4> How Hybrid Apps Can Help You? </h4>
                                                      <ul className="list-unstyled mt-2">
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  
                  </svg> <span>  By providing agile performance. </span> </li>
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span> With overwhelming aesthetics. </span> </li>
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span> With sturdy offline support system. </span> </li>
                    <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg> <span>  Through hassle-free integration with other apps. </span> </li>

                
                                                      </ul>
                                                  </div>
                                              </div>
                                              <div className="col">
                                                  <div className="comon-services aos-init aos-animate mt-0 mt-lg-5" data-aos="fade-up">
                                                      <figure>
                                                      <img src="images/2222988.png" alt="m"/>
                                                      </figure>
                                                      <h4> How Hybrid Apps Can Help You? </h4>
                                                      <ul className="list-unstyled mt-2">
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span> By providing agile performance. </span> </li>
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span> With overwhelming aesthetics. </span> </li>
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span>  With sturdy offline support system. </span> </li>
                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg> <span>  Through hassle-free integration with other apps. </span> </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                      </div>
                                  </div>
                              </div>
                          </div>
                        
                          <div className="comon-service-page mt-3">
                              <div className="animate-2 aos-init aos-animate" data-aos="fade-down">
                                  <figure>
                                    <img src="images/icon-1.png" alt="anm"/>
                                  </figure>
                                </div>
                              <div className="container">
                                  <div className="row g-lg-5 align-items-center flex-md-row-reverse">
                                      <div className="col-md-4">
                                          <h6 className="comon-sub-heading aos-init aos-animate" data-aos="fade-down"> APP Development </h6>
                                          <h1 className="main-haeding aos-init aos-animate" data-aos="fade-up"> <b> Native Apps </b> </h1>
                                          <p> As you can derive from the name, a native application is created while keeping a specific platform in mind. This quality makes the 
                                              native apps far more powerful than the others. Being built for a particular platform, 
                                              native apps have a knack to reap the full advantages of a particular operating system.</p>
                                      </div>
                                      <div className="col-md-8">
                                          <div className="row row-cols-1 row-cols-md-2">
                                              <div className="col">
                                                  <div className="comon-services aos-init aos-animate" data-aos="fade-up">
                                                      <figure>
                                                      <img src="images/5738077.png" alt="m"/>
                                                      </figure>
                                                      <h4> Why Build Native Apps </h4>
                                                      <ul className="list-unstyled mt-2">
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  
                  </svg> <span>  To reap the benefits of better performance.  </span> </li>
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span> To ensure more security. </span> </li>
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span> To get an intuitive and interactive app. </span> </li>
                  <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg> <span> To suffer from fewer bug related troubles. </span> </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                              <div className="col">
                                                  <div className="comon-services aos-init aos-animate mt-0 mt-lg-5" data-aos="fade-up">
                                                      <figure>
                                                      <img src="images/2222414.png" alt="m"/>
                                                      </figure>
                                                      <h4> Why Choose US? </h4>
                                                      <ul className="list-unstyled mt-2">
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span> To avail the expertise of seasoned app developers. </span> </li>
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span> To get native apps compatible with new hardware features. </span> </li>
                                                          <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg> <span>  To target specific mobile users for growth. </span> </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                      </div>
                                  </div>
                              </div>
                          </div>
                  
                  
                  
                      </div>
                  </div>

                  <ComonTools/>

       

             </div>
        </section>
        </>
    );
}
export default AppDevelopment;