import React from "react";
import { NavLink , Link} from "react-router-dom";
import { BsArrowRight, BsCloudArrowUp, BsCodeSquare,BsGem,BsPhone,BsMegaphone } from "react-icons/bs";
import $ from 'jquery';

$(document).ready(function() {
    $( window ).scroll(function() {
          var height = $(window).scrollTop();
          if(height >= 100) {
              $('header').addClass('fixed-menu');
          } else {
              $('header').removeClass('fixed-menu');
          }
      });
  });
  


function Header (){
    return(
        <>
        <header>
            
                <div className="menu-sec">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <NavLink className="navbar-brand" to="/">
                               <img src="images/footer-logo1.svg" alt="logo"/>
                            </NavLink>
                            <button className="navbar-toggler d-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                            
                            <li className="nav-item dropdown ">
                                <button className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                                </button>
                                <div className="dropdown-menu dropdown-menu1" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/uiux"> <BsGem/>
                                <span> UI / UX Designing  </span> </Link>
                                <NavLink className="dropdown-item" to="/webdevelopment"> <BsCodeSquare/>
                                <span> Web Development </span> </NavLink>
                                <NavLink className="dropdown-item" to="/appdevelopment"> <BsPhone/> 
                                <span> APP Development </span> </NavLink>
                                <NavLink className="dropdown-item" to="/digitalmarketing"> <BsMegaphone/> 
                                <span>Digital Marketing  </span> </NavLink>
                                <NavLink className="dropdown-item" to="/crmdevelopment"> <BsCloudArrowUp/> 
                                <span> CRM Development </span> </NavLink>


                                </div>
                                  
                                
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio"> Portfolio </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about"> About </NavLink>
                            </li>
                            
                           
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products"> Products </NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                            </li>
                            
                            </ul>
                
                
                            
                        </div>
                        
                        
                        <div className="right-sec-contact">
                            <ul className="list-unstyled">
                            
                                <li>
                                <a className="btn consult-bn"  data-bs-toggle="modal" data-bs-target="#enqmodal">Hire Us</a>
                                </li>
                            </ul>
                        </div>
                        
                
                            <a className="bar-id toggle-slide-right btn" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
                            <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"></path>
                            </svg></a>
                        
                        
                        
                        
                        
                        </nav>
                    </div>
                </div>
        
        </header>
     
        </>
    );
}
export default Header;