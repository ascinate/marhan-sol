import React, {useState, useEffect} from "react";
import TestimonialsAll from "./TestimonialsApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";


function Testimonial(){

    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    
    });
    const [ workData , setworkData] =useState(TestimonialsAll);
    console.log(workData);
    
    const settings = {
        dots: true,
        infinite: false,
        margin:30,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
        <div className="tesimonal-part">
                <div className="container">
                <div className="d-block d-lg-none">
                    <h6 className="comon-sub-heading mx-auto text-center"  data-aos="fade-up">Testimonial </h6>
                    <h2 className="main-haeding mx-auto my-4 text-center"  data-aos="fade-down"> <b> Trusted From </b>
                    <span className="d-block"> Our Clients</span> </h2>
                </div>
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <div className="slide-sec-2"  data-aos="fade-up">

                                    <Slider {...settings}>
                
                                    {
                                        workData.map((curElem) =>{
                                            const { id, para,name, location } = curElem;
                                            return(
                                                <>
                                            
                                                <div className="items-slide">
                                                    <p> <FaQuoteLeft/>  {para}    <FaQuoteRight/></p>
                                                    <h5> 
                                                    {name}
                                                    <span className="d-block">  {location} </span></h5>
                                                </div>
                                                </>
                                            );
                                        })
                                    }
                                    </Slider>
                            
                            </div>

                        

                            
                        </div>
                        <div className="col">
                        <div className="d-none d-lg-block">
                            <h6 className="comon-sub-heading ms-lg-4 mt-lg-4"  data-aos="fade-up">Testimonial </h6>
                            <h2 className="main-haeding ms-lg-4 mt-lg-4"  data-aos="fade-down"> <b> Trusted From </b>
                            <span className="d-block"> Our Clients</span> </h2>
                        </div>
                        </div>
                    </div>
                </div>
                <figure className="tesim">
                <img src="images/tes1.png" alt="pn"/>
                </figure>
                <figure className="tesim2">
                <img src="images/tes2.png" alt="pn"/>
                </figure>
                <figure className="tesim3">
                <img src="images/tes3.png" alt="pn"/>
                </figure>
                <figure className="tesim4">
                <img src="images/tes4.png" alt="pn"/>
                </figure>
                <figure className="tesim5">
                <img src="images/tes5.jpg" alt="pn"/>
                </figure>
        </div>
        </>
    );
}
export default Testimonial;