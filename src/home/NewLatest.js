import React, {useState, useEffect} from "react";
import AllLatestWork from "./LatestWorkApi";
import { FaList , FaAngleRight,FaThList, FaPlus, FaShoppingBasket, FaExternalLinkAlt,  FaDollarSign} from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';


function NewLatest(){
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
       

      
        </>
    );
}
export default NewLatest;