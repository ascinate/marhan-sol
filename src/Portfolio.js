import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import Protfoilowork from "./Portfolio/Protfoilowork";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio(){
  document.title ="Marhansolutions - Portfolio"
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
        <SubPageBanner name="Portfolio" indexpage="Home" indexvisit="/" activepage="Portfolio" img="images/guid-ecom-portofilo.webp" />


    

        <section className="total-body pt-3 d-block">
            <div className="portiloio-page-total-page">
            
            
        
              <div className="lates-prt-div">
                <div className="container">
                    
                    <h5 className="comon-sub-heading"  data-aos="fade-up">Projects</h5>
                    <h1 className="main-haeding"  data-aos="fade-down"> <b> See Our  </b>
                      <span>Work </span>
                    </h1>
        
                    <div className="port-div2">
                     
                         <Protfoilowork/>
                     
                    </div>
        
                  
        
                </div>
            </div>
        
        
            </div>
    
        </section>

        </>
    );
}
export default Portfolio;