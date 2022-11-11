import {Container, Flex, Box, Image, Paragraph} from "theme-ui";
import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {SRLWrapper, useLightbox} from "simple-react-lightbox";

function OnlyTest(){
    const {openLightbox, closeLightbox} = useLightbox()
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
        <Container>
            <button onClick={() => openLightbox()}>
                Open the third image
            </button>
            <SRLWrapper>
                <div className="row row-cols-1 row-cols-md-3 mt-5">
                <div className="col"  data-aos="fade-up">
                    <div  className="comon-post">
                
                            <a href="images/prodcuts/pharmacy.png">
                                <figure>
                                
                                <img src="images/materialpro-vuejs-dashboard-template-20.webp" alt="pn"/>
                                <span className="hover-zoom">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </span>
                                </figure> 
                            </a>
                            <h5>Contrar y to popular belief, Lorem Ipsum </h5>
                            <a href="#" className="view-btn">View Details </a>
                    </div>
                </div>

                <div className="col"  data-aos="fade-down">
                    <div  className="comon-post">
                        
                        <a  href="images/prodcuts/hospit.png">
                        <figure>
                            <img src="images/po.jpg" alt="pn"/>
                            <span className="hover-zoom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                            </span>
                        </figure> 
                        </a>
                        <h5>Contrary to popular belief, Lorem Ipsum </h5>
                        <a href="#" className="view-btn">View Details </a>
                    </div>
                </div>

                <div className="col"  data-aos="fade-up">
                    <div className="comon-post">
                        <a href="images/prodcuts/staff-management.png">
                        <figure>
                            <img src="images/ps3.jpg" alt="pn"/>
                            <span className="hover-zoom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                        </span>
                        </figure> 
                        </a>
                        <h5>Contrary to popular belief, Lorem Ipsum </h5>
                        <a href="#" className="view-btn">View Details </a>
                    </div>
                </div>


                </div>
            </SRLWrapper>
        </Container>
        </>
    );

    
}
export default OnlyTest;