import React, {useState} from "react";
import AllTools from "./ToolsApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function HomeTools(){
    const [ workData , setworkData] =useState(AllTools);
    console.log(workData);
    
    const settings = {
        dots: false,
        infinite: true,
        margin:30,
        speed: 500,
        slidesToShow:4,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          }
        ]
      };
    return(
        <>
        <div className="tootls-silder-sec">
               <div className="container">
                    <div className="tools-slider-main">
                       
                    <Slider {...settings}>

                    {
                        workData.map((curElem) =>{
                            const { id, imgicon} = curElem;
                            return(
                                <>
                               
                                <div class="comon-logo-tools">
                                    <figure className="m-0">
                                        <img src={imgicon} alt="name"/>
                                    </figure>
                                </div>
                                </>
                            );
                        })
                    }
                   </Slider>
                       
                    </div>
               </div>

           </div>
        </>
    );
}
export default HomeTools;