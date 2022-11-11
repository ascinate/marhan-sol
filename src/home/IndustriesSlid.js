import React , {useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import IndutryAll from "./IndustryWorkApi";
import Aos from "aos";
import "aos/dist/aos.css";

function IndustriesSlid(){

    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    
    });
    const [ workData , setworkData] =useState(IndutryAll);
    console.log(workData);
    
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        margin:30,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
        <div className="industri-wk-div">
                 <h5 data-aos="fade-up" className="comon-sub-heading"> we build experience   </h5>
                 <h1 className="main-haeding" data-aos="fade-down"> <span> <b> Industries we  </b> </span> work For</h1>
                <Slider {...settings}>

                {
                    workData.map((curElem) =>{
                        const { id, img,titel, para } = curElem;
                        return(
                            <>
                        
                            <div className="comon-steps">
                                        
                                    <figure>
                                    <img src={img} alt={titel}/>
                                    </figure>
                                    <h4> {titel} </h4>
                                    <p> {para}
                                    </p>

                            </div>
                            </>
                        );
                    })
                }
                </Slider>
        </div>
        </>
    );
}
export default IndustriesSlid;