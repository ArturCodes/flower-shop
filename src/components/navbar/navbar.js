import React from "react"
import "./navbar.scss"
import { FaAngleDown } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {

   return (
      <div className="nav-wrapper">
         <ul>
            <li><Link to="/shop">shop</Link></li>
            <li className="navlink">
               empty link
            </li>
            <li className="navlink dropdown">random dropdown<FaAngleDown className="arrow-down" />
               <div className="dropdown-content">
                  <div>
                     <h2>random left content </h2>
                     <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                  </div>
                  <div>
                     <h2>random right content</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus magna sit amet nisi rhoncus mollis. Vestibulum vel tortor quis elit semper dictum quis sed..</p>
                  </div>
               </div>
            </li>
            <li><Link to="/about">about us</Link></li>
         </ul>
      </div>
   )
}

export default Navbar