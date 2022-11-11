import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Fancybox from "./Fancybox";

function HomeEx(){
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
  <p>
    <button
      data-fancybox="gallery"
      data-src="https://lipsum.app/id/1/800x600"
      className="button button--secondary"
    >
      Image #1
    </button>

    <button
      data-fancybox="gallery"
      data-src="https://lipsum.app/id/2/800x600"
      className="button button--secondary"
    >
      Image #2
    </button>
  </p>
</Fancybox>
        </div>
    </div>
        </>
    );
}
export default HomeEx;