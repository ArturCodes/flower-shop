/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './footer.scss'
import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare, FaRedditSquare, FaPinterestSquare, FaTumblrSquare, FaInstagram, FaFlickr } from "react-icons/fa"

const Footer = () => {
   return (


      <div className="footer-wrapper">

         <div className="footer-left">
            <div className="map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37998.41281541547!2d-93.58539747234171!3d44.9386072739403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f61d535005cbcf%3A0x77ca8ab361fd43ef!2sRay%20Peters%20Park%2C%20Crescent%20St%2C%20Wayzata%2C%20MN%2055391!5e0!3m2!1sen!2sus!4v1586646659308!5m2!1sen!2sus" width="350" height="350" frameborder="0" aria-hidden="false"></iframe>
            </div>
            <div className="info">
               <li>1020 Some Fake Blvd. <br />Flowerland, MK 55333 </li>
               <li>(763) 123-1234</li>
               <br />
               <li><span style={{ textDecoration: "underline" }}>Hours</span></li>
               <li>Mon-Fri: 9am-5pm</li>
               <li>Sat-Sun: 10am-6pm</li>
            </div>
         </div>

         {/* --------------------------------------------- */}
         <div className="footer-right">
            <div className="media">
               <p>Find Us On</p>
               <ul>
                  <div> <FaFacebookSquare /> Facebook</div>
                  <div> <FaTwitterSquare /> Twitter</div>
                  <div> <FaGooglePlusSquare /> Google+</div>
                  <div> <FaRedditSquare /> Reddit</div>
               </ul>
               <ul>
                  <div> <FaPinterestSquare /> Pinterest</div>
                  <div> <FaTumblrSquare /> Tumblr</div>
                  <div> <FaInstagram /> Instagram</div>
                  <div> <FaFlickr /> Flickr</div>
               </ul>
            </div>
            <div className="info">

            </div>
         </div>
      </div>


   )
}

export default Footer