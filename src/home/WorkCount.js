import React,{useEffect} from "react";
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaPlus } from "react-icons/fa";


$(document).ready(function() {
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
});

function WorkCount(){
   
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
                <div className="row row-cols-1 row-cols-md-5  g-lg-5" id="counter">
                <div className="col">
                    <div className="comon-number1" data-aos="fade-up">
                        <div className="d-flex align-items-center justify-content-center">
                            <h2 className="counter-value" data-count="10">0</h2>
                            <span><FaPlus/></span>
                        </div>
                            
                        <p>  Years in Business </p>
                    </div>
                </div>
                <div className="col">
                    <div className="comon-number1" data-aos="fade-up">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2 className="counter-value" data-count="28">0</h2>
                        <span><FaPlus/></span>
                    </div>
                        <p>  Served Industry </p>
                    </div>
                </div>
                <div className="col">
                    <div className="comon-number1" data-aos="fade-down">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2 className="counter-value" data-count="500">0</h2>
                        <span><FaPlus/></span>
                    </div>
                        <p>  Projects Done  </p>
                    </div>
                </div>
                <div className="col">
                    <div className="comon-number1" data-aos="fade-up">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2 className="counter-value" data-count="450">0</h2>
                        <span><FaPlus/></span>
                    </div>
                        <p>  Satisfied Clients </p>
                    </div>
                </div>
                <div className="col">
                    <div className="comon-number1" data-aos="fade-down">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2 className="counter-value" data-count="800000">0</h2>
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
export default WorkCount;