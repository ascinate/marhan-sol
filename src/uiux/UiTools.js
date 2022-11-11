import React, {useState} from "react";
import AllUiTools from "./UiToolsApi";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function UiTools(){
    const [ workData , setworkData] =useState(AllUiTools);
    console.log(workData);
    
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            851: {
                items: 2,
            },
            1000: {
                items:4,
    
            }
        },
    };
    return(
        <>
     
                       
                    <OwlCarousel className='owl-theme'
                    {...options}>

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
                    </OwlCarousel> 
                       
           
        </>
    );
}
export default UiTools;