import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import Aos from "aos";
import "aos/dist/aos.css";

function CrmDevelopment(){
  document.title ="Marhansolutions - CRM Development"
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
          <SubPageBanner name="CRM Development" indexpage="Home" indexvisit="/" activepage="CRM Development"
        img="images/guid-ecom-crm.webp" />


        <section class="total-body pt-3 d-block">


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
                                <img src="images/crm1.png" alt="pnm"/>
                            </figure>
                            </div>
                            <div className="col">
                                <h6 className="comon-sub-heading mt-5 mt-md-0" data-aos="fade-down"> CRM Development </h6>
                                <h1 className="main-haeding" data-aos="fade-up"> <b> We Offering </b> <span className="d-block"> <b>
                                    Custom CRM    </b>   Solutions </span> </h1>
                                <h5 className="para-big" data-aos="fade-up">We develops custom CRM solutions focused on automating sales, marketing, and customer service business
                                     processes for healthcare, banking, real estate, and other industries.</h5>
                    
                                    
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
                                <div className="col-md-4">
                                    <h6 className="comon-sub-heading aos-init aos-animate mt-4 mt-md-0" data-aos="fade-down"> CRM Development </h6>
                                    <h1 className="main-haeding aos-init aos-animate" data-aos="fade-up"> <b> Provide awesome service </b> </h1>
                                    <p> We have a keen understanding & knowledge of how to use industry-leading CRM programs, such as Salesforce, Microsoft Dynamics, SugarCRM, Zoho, OrangeCRM,
                                         and SAP, to boost productivity and meet client needs. </p>
                                </div>
                                <div className="col-md-8">
                                    <div className="row row-cols-1 row-cols-sm-2">
                                        <div className="col">
                                            <div className="comon-services aos-init aos-animate" data-aos="fade-up">
                                                <figure>
                                                <img src="images/888991.png" alt="m"/>
                                                </figure>
                                                <h4> CRM Process Automation Solutions </h4>
                                                 <p> Enable the digital transformation of business processes by engineering platform-based CRM process automation solutions 
                                                    that help businesses optimize existing sales,
                                                     marketing, and customer services processes by automating regular tasks.</p>
                                            </div>
    
    
                                            <div className="comon-services aos-init aos-animate mt-4" data-aos="fade-up">
                                                <figure>
                                                <img src="images/4335093.png" alt="m"/>
                                                </figure>
                                                <h4> CRM Cloud Solutions </h4>
                                                 <p> Develop custom cloud CRM solutions and provide hassle-free cloud-based CRM installation, enabling round-the-clock accessibility to all essential client information both in the office and remotely so 
                                                 that you’re always connected to your customers.</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="comon-services aos-init aos-animate mt-0 mt-md-5" data-aos="fade-up">
                                                <figure>
                                                <img src="images/3934272.png" alt="m"/>
                                                </figure>
                                                <h4> CRM Mobile App Solutions </h4>
                                                <p> Engineer custom mobile CRM applications, allowing users to view calendars, check & create emails, review account updates, join a video conference call, view dashboards & reports, and 
                                                so much more to help businesses close more deals, faster.</p>
                                            </div>
                                        </div>
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
export default CrmDevelopment;