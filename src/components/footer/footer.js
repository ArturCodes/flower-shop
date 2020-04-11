/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './footer.scss'

const Footer = () => {
   return (
      <div className="footer-wrapper">

         <div className="map">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37998.41281541547!2d-93.58539747234171!3d44.9386072739403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f61d535005cbcf%3A0x77ca8ab361fd43ef!2sRay%20Peters%20Park%2C%20Crescent%20St%2C%20Wayzata%2C%20MN%2055391!5e0!3m2!1sen!2sus!4v1586646659308!5m2!1sen!2sus" width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

         </div>


      </div>
   )
}

export default Footer