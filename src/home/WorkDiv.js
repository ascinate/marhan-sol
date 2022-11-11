import React, {useState, useEffect} from "react";
import AllLatestWork from "./LatestWorkApi";

function WorkDiv(){
    const [ workData , setworkData] =useState(AllLatestWork);
    console.log(workData);
    useEffect(() => {
        mixitup(".items", {
          selectors: {
            target: ".item",
          },
          animation: {
            duration: 500
          }
        });
      }, []);
     return(
        <>
        <div class="port-div2">
                <div class="controls mt-3 mb-5 d-flex flex-column flex-sm-row justify-content-md-end"  data-aos="fade-up">
    
                    <button class="filter btn" data-filter="all">All</button>
                    <button class="filter btn" data-filter=".category-3">UI/UX</button>
                    <button class="filter btn" data-filter=".category-4">Mockup Design</button>
                    <button class="filter btn" data-filter=".category-6">Development</button>
                </div>
              
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-lg-5 bd-part items">

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
                    
                    </div>
             
        </div>
        </>
     );
}
export default WorkDiv;