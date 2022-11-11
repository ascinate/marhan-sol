import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import Aos from "aos";
import "aos/dist/aos.css";
import Allcount from "./Allcount";
import Helmet from "react-helmet";



function About(){

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
       
        <Helmet
        htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
        title="My Title"
        titleTemplate="React Helmet - %s"
        defaultTitle="React Helmet Title"
        base={{"target": "_blank", "href": "http://myappname.herokuapp.com/"}}
        meta={[
            {"name": "description", "content": "Helmet application"},
            {"property": "fb:app_id", "content": "myfbid"},
            {"property": "og:title", "content": "My application title goes here."},
            {"property": "og:type", "content": "website"},
            {"property": "og:url", "content": "http://myappname.com/"},
            {"property": "og:image", "content": "https://imagename.png"},
            {"property": "og:description", "content": "Application description"},
            {"property": "og:site_name", "content": "MyAppname.com"},

        ]}
      />

          <div className="about-sub float-start w-100">
            <SubPageBanner name="About Us" indexpage="Home" indexvisit="/" activepage="About Us" img="images/about-sub-n.webp" />
          </div>

          <section className="total-body pt-3 d-block float-start w-100">
              <div className="about-total-page">
                    <div className="industri-wk-div">
                        <div className="container">
                            <h5 data-aos="fade-up" className="comon-sub-heading"> What We Offer   </h5>
                            <h1 className="main-haeding" data-aos="fade-down"> <span> <b> Why Marhan </b> </span> Differently? </h1>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4"  data-aos="fade-up">
                                <div className="col">
            
                                
                                    <div className="flip-card" tabIndex="0">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <figure>
                                                    <img src="images/5202865.png" alt="steps1"/>
                                                    </figure>
                                                    <h4> Real-Time Communication </h4>
                                                        <p>
                                                            Our application developers work within your..
                                                        </p>
                                            </div>
                                            <div className="flip-card-back">
                                                <p> Our application developers work within your time zone to allow real-time collaboration and a true “branch location” feel,
                                                    ensuring full availability during your business hours. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col">
            
                                    <div className="flip-card" tabIndex="0">
                                        <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <figure>
                                                <img src="images/2951033.png" alt="steps1"/>
                                                </figure>
                                                <h4> Scalability & Support </h4>
                                                    <p>
                                                        We work with you based on your software..
                                                    </p>
                                        </div>
                                        <div className="flip-card-back">
                                            <p> We work with you based on your software development objectives to bring you the most value and the quickest return on investment while defining tactics and a dedicated team to your project.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                            
            
                                </div>
                                <div className="col">
            
                                    <div className="flip-card" tabIndex="0">
                                        <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <figure>
                                                <img src="images/2812542.png" alt="steps1"/>
                                            </figure>
                                            <h4> Industry-Specific Experience </h4>
                                                    <p>
                                                        Our developers are organized in virtual divisions..
                                                    </p>
                                        </div>
                                        <div className="flip-card-back">
                                            <p> Our developers are organized in virtual divisions, carrying the domain experience and know-how within the industry to offer exceptional application development solutions.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
            
                                </div>
            
                                <div className="col">
            
                                    <div className="flip-card" tabIndex="0">
                                        <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <figure>
                                                <img src="images/1159607.png" alt="steps1"/>
                                                </figure>
                                                <h4> Source Code & IP Ownership </h4>
                                                    <p>
                                                        Our fully customizable solutions require no..
                                                    </p>
                                        </div>
                                        <div className="flip-card-back">
                                            <p> Our fully customizable solutions require no licensing fees upon project completion. Under our agreement, you will own the source code and intellectual property of your proprietary software, website or app. 
                                            </p>
                                        </div>
                                        </div>
                                    </div>
            
                                </div>
            
            
                                
            
            
                            </div>
                        </div>
            
                    </div>
  
                    <div className="home-about py-5">
                        <div className="animate-1">
                          <figure data-aos="fade-down" className="aos-init aos-animate">
                            <img src="images/img-slide-landing3.png" alt="anm"/>
                          </figure>
                        </div>
                          <div className="container">
                          
                    
                            <div className="about-main-sec-home">
                              <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                                <div className="col" data-aos="fade-up">
                                  <figure>
                                      <img src="images/aboutus2-b-new.png" alt="pnm"/>
                                  </figure>
                                </div>
                                <div className="col">
                                    <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> About Company </h6>
                                    <h1 className="main-haeding" data-aos="fade-up"> <b> Short Story </b>  For <span className="d-block"> </span><b> Our Company </b> </h1>
                                    <h5 className="para-big" data-aos="fade-up">Marhan Solution is a INDIA-based web & mobile app development company specializing in providing businesses worldwide with custom technology solutions.</h5>
                                    <p>  As a mobile and web-based application development company with over 400+ completed projects successfully, We combines technological expertise, specific domain experience,
                                        and a passion for excellence to deliver enterprise-grade solutions.</p>
                                    
                                </div>
                              </div>
                            </div>
                    
                    
                    
                          </div>
            
                          <Allcount/>
                    </div>
  
                    <div className="services-div-part">
                        <div className="animate-2 aos-init aos-animate" data-aos="fade-down">
                          <figure>
                            <img src="images/icon-1.png" alt="anm"/>
                          </figure>
                        </div>
                          <div className="container">
                              <div className="srs-div">
                                  <div className="row g-lg-5 align-items-center">
                                    <div className="col-md-4 col-lg-5">
                                        <h5 className="comon-sub-heading" data-aos="fade-up">Digital Agency</h5>
                                        <h1 className="main-haeding" data-aos="fade-down"> <b> Our Approach </b>
                                          <span className="d-block"> for  <b> Your Business </b> </span>
                                        </h1>
                                        <p> We will create an attractive, informative and functional solution that exceeds your expectations and meets your business objectives.</p>
                                    
                                    </div>
                                    <div className="col-md-8 col-lg-7">
                                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 home-servives align-items-center">
                                            <div className="col">
                                                <div className="comon-services"  data-aos="fade-up">
                                                    <figure>
                                                      <img src="images/3659651.png" alt="m"/>
                                                    </figure>
                                                    <h4> Our Aim </h4>
                                                    <p>We founded in 2012 with the moto of helping small and medium businesses to increase their revenue. Our goal was to help our clients to present their business in worldwide & attract valuable resources.</p>
                                                </div>
                    
                                                <div className="comon-services mt-4" data-aos="fade-down">
                                                  <figure>
                                                    <img src="images/1321945.png" alt="m"/>
                                                  </figure>
                                                  <h4> Mission </h4>
                                                  <p> Our mission is to help clients to achieve their aims through our high-quality web development, app development and digital marketing services.</p>
                                                </div>
                                            </div>
                    
                    
                                            <div className="col">
                                              <div className="comon-services" data-aos="fade-up">
                                                  <figure>
                                                    <img src="images/1851036.png" alt="m"/>
                                                  </figure>
                                                  <h4> Quality Policy </h4>
                                                  <p> Our Quality Policy is focused on the client. It is our aim and responsibility to understand the client’s requirements, develop optimal solutions, ensure quality at every step and achieve the goal on delivery and services.</p>
                                              </div>
                    
                                        
                    
                                            
                                            </div>
                    
                                            
                    
                    
                                        </div>
                                      </div>
                                  </div>
                              </div>
                    
                          
                    
                          </div>
                    </div>
            
                    <div className="afotable-part-div">
                        <div className="container">
                            <h5 className="text-center comon-sub-heading"  data-aos="fade-up">How It Work </h5>
                            <h2 className="text-center main-haeding"  data-aos="fade-down"> <b> Our Principles Of  </b> Development Process </h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 justify-content-center mn-plans">
                            <div className="col">
                                <div className="comon-plans"  data-aos="fade-up">
                                    <h6 className="popluar-plans-text">Steps 1</h6>
                                        <figure>
                                        <img src="images/3242120.png" alt="nm"/>
                                        </figure>
                                        <h6 className="pl-titel"> Pre</h6>
                                        <h2>  Development </h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                                  </svg>
                                              <span> Requirement analysis
                                              
                                                </span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                                  </svg>
                                              <span>  Fix the timeline  </span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                                  </svg>
                                              <span> Delegate to teams  </span>
                                            </li>
                                        </ul>
            
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-plans"  data-aos="fade-up">
                                    <h6 className="popluar-plans-text">Steps 2</h6>
                                        <figure>
                                        <img src="images/752420.png" alt="nm"/>
                                        </figure>
                                        <h6 className="pl-titel"> Create </h6>
                                        <h2> Design </h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                                  </svg>
                                              <span>  Design with XD/Figma. </span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                              </svg>
                                            
                                            <span>  Convert to REACT/Bootstrap </span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                                  </svg>
                                                
                                            <span>  Responsive Layouts </span>
                                            </li>
                                        </ul>
            
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-plans"  data-aos="fade-down">
                                    <h6 className="popluar-plans-text">Steps 3</h6>
                                    <figure>
                                        <img src="images/2010990.png" alt="nm"/>
                                    </figure>
                                    <h6 className="pl-titel"> Convert </h6>
                                    <h2> Development </h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                              </svg>
                                          <span> Database schema. </span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                              </svg>
                                          <span> Features development. </span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                              </svg>
                                          <span> Client's feedback & deliver. </span>
                                        </li>
                                    </ul>
            
                                  
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-plans"  data-aos="fade-up">
                                    <h6 className="popluar-plans-text">Steps 4</h6>
                                    <figure>
                                        <img src="images/1092216.png" alt="nm"/>
                                    </figure>
                                    <h6 className="pl-titel"> Check &</h6>
                                    <h2> Deliver </h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                              </svg>
                                            <span>   Testing features. </span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                              </svg>
                                            <span>   Bug fixing. </span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                              </svg>  
                                        <span> Deploy to live. </span>
                                        </li>
                                    </ul>
            
                                    
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
export default About;