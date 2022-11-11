import React from "react";


import $ from "jquery";

$(document).ready(function() {
   

    $('#carouselExampleFade').carousel({
        interval: 100,
        pause: "false"
    });
});
function Banner(){
    return(
        <>
        <section className="banner-part" >
        <div className="red-dots cms-dots"></div>
        <div className="y-dots cms-dots"></div>
        <div className="b-dots cms-dots"></div>
        <div className="red-dots2 cms-dots"></div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-pause="false"  data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2500">

                             
                         
                                <img src="images/simple-banner.jpg" className="bg-slider w-100" alt="banner1" />
                                <div className="carousel-caption">
                                        <div className="d-block d-lg-none">
                                            <div className="mobile-view-laotp">
                                                <img src="images/laptop-svg.svg" className="laptop-main" alt="svg"/>
                                                <div className="slide-big-box slid-one">
                                                    <img src="images/1img.png" className="slid-n1"/>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="comon-banner-text">
                                            <h6> Hello! We are </h6>
                                            <h1>We Create High Quality <span className="d-block">
                                                Digital Solution </span> </h1>
                                            <p>If You Are Looking For The All-Round Best Web Solution & Mobile App, You Can Find It Here. 
                                                Working With You We Will Create An Attractive.</p>

                                            <button type="button" className="buy-now-btn" name="button" data-bs-toggle="modal" data-bs-target="#enqmodal">  Free Consultation 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                </svg>
                                            </button>
                                        </div>
                             
                                        <div className="img-right-div d-none d-lg-block">
                          
                                            <div className="moblie-slide-div">
                                                <img src="images/mobile-png.png" alt="svbm"/>
                                                <div className="mobile-view-slide slid-move-img1">
                                                    <img src="images/mobile-slid1.jpg" alt="mb1" className="mobial-img-3"/>
                                                </div>
                                            </div>
                                    
                                            <div className="laptop-inside-1">
                                                <img src="images/laptop-png.png" className="laptop-main" alt="svg"/>
                                                <div className="slide-big-box slid-one">
                                                    <img src="images/new-destop1.jpg" className="slid-n1"/>
                                                </div>
                                            </div>
                    
                                        </div>
                                    
                                </div>
                    
                            </div>
                            <div className="carousel-item slide-banner-2"  data-bs-interval="2500">
                       
                                 <img src="images/simple-banner.jpg" className="bg-slider3 w-100" alt="..."/>
                                 <div className="carousel-caption">

                                        <div className="d-block d-lg-none">
                                            <div className="mobile-view-laotp">
                                               <img src="images/laptop-svg.svg" className="laptop-main" alt="svg"/>
                                                <div className="slide-big-box slid-one">
                                                <img src="images/new-destop2.jpg" className="slid-n1"/>
                                                </div>
                                            </div>
                                        </div>
                            
                                       <div className="comon-banner-text">
                                            <h6> What we Do </h6>
                                            <h1>We build creative <span className="d-block">
                                            ecommerce & apps </span> </h1>
                                            <p>If You Are Looking For The All-Round Best Web Solution & Mobile App, You Can Find It Here. 
                                            Working With You We Will Create An Attractive.</p>

                                            <button type="button" className="buy-now-btn" name="button" data-bs-toggle="modal" data-bs-target="#enqmodal">  Free Consultation 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                </svg> 
                                            </button>
                                        </div>

                                    
                                        <div className="img-right-div d-none d-lg-block">
                          
                                            <div className="moblie-slide-div">
                                                <img src="images/mobile-png.png" alt="svbm"/>
                                                <div className="mobile-view-slide slid-move-img1">
                                                    <img src="images/mobile-slid2.jpg" alt="mb1" className="mobial-img-3"/>
                                                </div>
                                            </div>
                                    
                                            <div className="laptop-inside-1">
                                                <img src="images/laptop-png.png" className="laptop-main" alt="svg"/>
                                                <div className="slide-big-box slid-one">
                                                    <img src="images/new-destop2.jpg" className="slid-n1"/>
                                                </div>
                                            </div>
                    
                                        </div>
                                
                                    
                                 </div>

                               
                    
                            </div>

                            <div className="carousel-item slide-banner-3" data-bs-interval="2500">
                            
                                   <img src="images/simple-banner.jpg" className="bg-slider4 w-100" alt="..."/>
                                   <div className="carousel-caption ">
                                  

                                            <div className="d-block d-lg-none">
                                                <div className="mobile-view-laotp">
                                                    <img src="images/laptop-svg.svg" className="laptop-main" alt="svg"/>
                                                    <div className="slide-big-box slid-one">
                                                        <img src="images/new-destop4.jpg" className="slid-n1"/>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="comon-banner-text">
                                                <h6> Digital Agency </h6>
                                                <h1>Grow Your Business <span className="d-block">
                                                With Us </span> </h1>
                                            <p>If You Are Looking For The All-Round Best Web Solution & Mobile App, You Can Find It Here. 
                                                Working With You We Will Create An Attractive.</p>

                                                <button type="button" className="buy-now-btn" name="button" data-bs-toggle="modal" data-bs-target="#enqmodal">  Free Consultation 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                    </svg> 
                                                </button>
                                            </div>


                                            <div className="img-right-div d-none d-lg-block">
                          
                                                <div className="moblie-slide-div">
                                                    <img src="images/mobile-png.png" alt="svbm"/>
                                                    <div className="mobile-view-slide slid-move-img1">
                                                        <img src="images/mobile-slid3.jpg" alt="mb1" className="mobial-img-3"/>
                                                    </div>
                                                </div>
                                        
                                                <div className="laptop-inside-1">
                                                    <img src="images/laptop-png.png" className="laptop-main" alt="svg"/>
                                                    <div className="slide-big-box slid-one">
                                                        <img src="images/new-destop4.jpg" className="slid-n1"/>
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
export default Banner;