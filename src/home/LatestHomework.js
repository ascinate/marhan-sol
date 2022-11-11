import React, {useState, useEffect} from "react";
import AllLatestWork from "./LatestWorkApi";
import { FaList , FaAngleRight,FaThList, FaPlus, FaShoppingBasket, FaExternalLinkAlt,  FaDollarSign} from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';


function LatestHomework(){
    const [ items , setItems] =useState(AllLatestWork);
    const filterItems = (cateItem) => {
        const updatedItems = AllLatestWork.filter((curElem) => {
               return curElem.category == cateItem;

        }); 

        setItems(updatedItems);
    }
   
    var selector = '.filter-menu-q li';
        
        $(selector).on('click', function(){
            $(selector).removeClass('active');
            $(this).addClass('active');
        });
    
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
        <div className="controls mt-3 mb-5 d-flex flex-column flex-sm-row justify-content-md-end">

            <ul className="fiter-btn list-unstyled filter-menu-q d-flex justify-content-center">
                <li className="active">
                <button type="button"  className="filter btn" onClick={ () => setItems(AllLatestWork)}>All</button>
                </li>
                <li>
                    <button type="button"  className="filter btn" onClick={()=> filterItems('dessertwine')}>UI/UX</button>
                </li>
                <li>
                <button type="button" className="filter btn" onClick={ () => filterItems ('sparklingwine')}>Mockup Design  </button>
                </li> 
                <li>
                <button type="button" className="filter btn" onClick={ () => filterItems ('redwine')}>Development</button>
                </li>
        
            </ul>
        
        </div>
       
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-lg-5 bd-part items">
       
                {
                    items.slice().map((curElem) => {
                    const { id, imgicon, name, category} =curElem;
                    return(
                        <>
                        <div className="col mix category-6">
                        
                          <div className="cm-port">
                          
                                    <ReactFancyBox
                                    thumbnail={imgicon}
                                    image={imgicon}/>
                                            
                                        <div className="hover-effect-div">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                            </svg>
                                        </div>
                                   
                                        <div className="ps-titel-div">
                                            <h5> Lorem Ipsum</h5>
                                            <p> Lorem Ipsum is simply </p>
                                        </div>
                           </div>
                           
                        </div>
                        </>
                    );
                })
                }
                

         </div>

      
        </>
    );
}
export default LatestHomework;