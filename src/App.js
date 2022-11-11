
import {useState, useEffect, CSSProperties} from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import AppDevelopment from "./AppDevelopment";
import WebDevelopment from "./WebDevelopment";
import DigitalMarketing from "./DigitalMarketing";
import CrmDevelopment from "./CrmDevelopment";
import Portfolio from "./Portfolio";
import Uiux from "./Uiux";
import TermsConditions from "./TermsConditions";
import Disclaimer from "./Disclaimer";
import PrivacyPolicy from "./PrivacyPolicy";
import Contact from "./Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import ScaleLoader from "react-spinners/ScaleLoader";


import $ from "jquery";


const override: CSSProperties = {
    display: "flex",
    margin: "0 auto",
    borderColor: "red",
    background:"#2b0d46",
    alignContent:"center",
    textAlign:"center",
    height:"100",
    color:"#D73636",
    width:"100%",
    height:"100vh",
    alignItems:"center",
    justifyContent:"center",


  };


function App() {
   
  const [loading, setLoading ] = useState(false);
  useEffect(() => {
     setLoading(true)
     setTimeout(() =>{
        setLoading(false)
     }, 300 )
    },[])

    let [color, setColor] = useState("#D73636");

  return (
    
    <div className='app'>
    {
        loading ?

        <ScaleLoader color={color} loading={loading} cssOverride={override}  size={25}
         />
        :
        
        <Router>
            <Header/>
            <Routes>
                <Route exact="true" path="/" element={<Home/>}/>
                <Route exact="true" path="/about" element={<About/>}/>
                <Route exact="true" path="/products" element={<Products/>}/>
                <Route exact="true" path="/uiux" element={<Uiux/>}/>
                <Route exact="true" path="/webdevelopment" element={<WebDevelopment/>}/>
                <Route exact="true" path="/appdevelopment" element={<AppDevelopment/>}/>
                <Route exact="true" path="/digitalmarketing" element={<DigitalMarketing/>}/>
                <Route exact="true" path="/crmdevelopment" element={<CrmDevelopment/>}/>
                <Route exact="true" path="/portfolio" element={<Portfolio/>}/>
                <Route exact="true" path="/termsconditions" element={<TermsConditions/>}/>
                <Route exact="true" path="/disclaimer" element={<Disclaimer/>}/>
                <Route exact="true" path="/privacypolicy" element={<PrivacyPolicy/>}/>
                <Route exact="true" path="/contact" element={<Contact/>}/>
                
                

                
            </Routes>
            <Footer/>
      </Router>
      }
       
    </div>
  );
}

export default App;
