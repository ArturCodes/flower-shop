import React from 'react'
import './footer.scss'

const Footer = () => {
   return (
      <div className="footer-wrapper">
         <div className="text-wrapper">
            <div className="site-purpose">
               <h3>Created by Artur Shapiro</h3>
               <p>With the purpose of demonstration of web dev abilities</p>
            </div>
            <div className="social-media">
               <ul>
                  <li>Twitter</li>
                  <li>GitHub</li>
                  <li>LinkedIn</li>
               </ul>
               <ul>
                  <li>Gmail:</li>
                  <li>Email:</li>
                  <li>Phone:</li>
               </ul>
            </div>

         </div>
      </div>
   )
}

export default Footer