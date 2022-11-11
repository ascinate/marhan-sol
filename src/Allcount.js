import React,{useEffect} from "react";
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaPlus } from "react-icons/fa";




function Allcount(){
   
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
           
        <div className="work-count-div">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-5  g-lg-5" id="counter2">
                <div className="col">
                    <div className="comon-number1" data-aos="fade-up">
                        <div className="d-flex align-items-center justify-content-center">
                            <h2 >10</h2>
                            <span><i className="fas fa-plus"></i></span>
                        </div>
                            
                        <p>  Years in Business </p>
                    </div>
                </div>
                <div className="col">
                    <div className="comon-number1" data-aos="fade-up">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2 >28</h2>
                        <span><FaPlus/></span>
                    </div>
                        <p>  Served Industry </p>
                    </div>
                </div>
                <div className="col">
                    <div className="comon-number1" data-aos="fade-down">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2>500</h2>
                        <span><FaPlus/></span>
                    </div>
                        <p>  Projects Done  </p>
                    </div>
                </div>
                <div className="col">
                    <div className="comon-number1" data-aos="fade-up">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2>450</h2>
                        <span><FaPlus/></span>
                    </div>
                        <p>  Satisfied Clients </p>
                    </div>
                </div>
                <div className="col">
                    <div className="comon-number1" data-aos="fade-down">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2>800000</h2>
                        <span><FaPlus/></span>
                    </div>
                        <p>   Lines Of Codes</p>
                    </div>
                </div>

                </div>

            </div>
        </div>
        </>

    );
}
export default Allcount;