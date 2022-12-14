import React,{useEffect} from "react";
import SubPageBanner from "./SubPageBanner";
import { BsArrowRight, BsCart2, BsFillXDiamondFill,BsArrowUpRightSquare } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

function PrivacyPolicy(){
  document.title ="Marhansolutions - Privacy Policy"
  useEffect(() => {
    Aos.init({
        offset: 20,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });

      window.scrollTo(0, 0)
    });
    return(
        <>
        <SubPageBanner name="Privacy Policy" indexpage="Home" indexvisit="/" activepage="Privacy Policy"
        img="images/privacy-police.webp" />
        <section className="total-body pt-3 d-block">
           <div className="pripacy-p trems-page">
             <div className="container">
                 <p> What personal data we collect and why we collect it  </p>
                 <div class="comon-part-trm">
                   <h5>Comments </h5>
                   <p> When visitors leave comments on the site, we collect the data shown in the comments form and the 
                     visitor’s IP address and browser user agent string to help spam detection. </p> 
                     <p> An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service Privacy Policy is available here: https://automattic.com/privacy/. 
                       After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                </div>
                <div class="comon-part-trm">
                   <h5>Media</h5>
                   <p> If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website. </p> 
                 </div>

                 <div class="comon-part-trm">
                   <h4 class="mb-3"> Contact forms </h4>
                   <h5> Cookies </h5>
                   <ul className="list-unstyled">
                    <li>  <BsFillXDiamondFill/> <span> If you leave a comment on our site, you may opt into saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</span>  </li>
                    <li>  <BsFillXDiamondFill/> <span> If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. </span>  </li>
                    <li>  <BsFillXDiamondFill/> <span> When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. 
                      If you log out of your account, the login cookies will be removed.</span>  </li>
                    <li>  <BsFillXDiamondFill/> <span> If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply 
                      indicates the post ID of the article you just edited. It expires after one day.</span>  </li>
                    <li>  <BsFillXDiamondFill/> <span> Embedded content from other websites
                        Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                        </span>  </li>
                    <li>  <BsFillXDiamondFill/> <span>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with 
                      the embedded content if you have an account and are logged in to that website.
                          </span>  </li>
                      
                   </ul>
                 </div>

                 <div class="comon-part-trm">
                   <h5>Analytics </h5>
                   <p> Who we share your data with
                    How long we retain your data
                    If you leave a comment, the comment and its metadata are retained indefinitely.
                     This is so we can recognize and approve any follow-up comments automatically instead of 
                     holding them in a moderation queue. </p> 
                   <p> For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time 
                     (except they cannot change their username). Website administrators can also see and edit that information.</p>
                   <p> What rights you have over your data
                    If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does
                     not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                   <p> Where we send your data
                    Visitor comments may be checked through an automated spam detection service.</p>
                   <p> Your contact information
                    Additional information
                    How we protect your data
                    What data breach procedures we have in place
                    What third parties we receive data from
                    What automated decision making and/or profiling we do with user data
                    Industry regulatory disclosure requirements</p>
                 </div>

                 <div class="comon-part-trm">
                   <h5>Analytics </h5>
                   <p> Who we share your data with
                    How long we retain your data
                    If you leave a comment, the comment and its metadata are retained indefinitely.
                     This is so we can recognize and approve any follow-up comments automatically instead of 
                     holding them in a moderation queue. </p> 
                   <p> For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time 
                     (except they cannot change their username). Website administrators can also see and edit that information.</p>
                   <p> What rights you have over your data
                    If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does
                     not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                   <p> Where we send your data
                    Visitor comments may be checked through an automated spam detection service.</p>
                   <p> Your contact information
                    Additional information
                    How we protect your data
                    What data breach procedures we have in place
                    What third parties we receive data from
                    What automated decision making and/or profiling we do with user data
                    Industry regulatory disclosure requirements</p>
                 </div>
             </div>
                
                
              
           </div>
        </section>
        </>
    );
}
export default PrivacyPolicy;