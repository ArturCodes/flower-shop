import React from "react"
import "./header.scss"
import { Link } from "react-router-dom"

const Header = () => {
   return (
      <div className="header-wrapper">

         <div className="header">


            <div className="hours">
               <ul>
                  <li>1020 Some Fake Blvd. <br />Flowerland, MK 55333 </li>
                  <li>(763) 123-1234</li>
               </ul>
               <ul>
                  <li><span style={{textDecoration: "underline"}}>Hours</span></li>
                  <li>Mon-Fri: 9am-5pm</li>
                  <li>Sat-Sun: 10am-6pm</li>
               </ul>
            </div>


            <div className="logo">
               <h1>
                  <Link to="/">Valleys Flora</Link>
               </h1>
            </div>


            <div className="contact">
               <span>
                  <a href="https://artur-shapiro.netlify.com/">
                     Created by Artur Shapiro
                  </a>
               </span>
            </div>

         </div>

      </div>
   )
}

export default Header