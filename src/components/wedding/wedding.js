import React from "react"
import './wedding.scss'

const Wedding = () => {

   return (
      <div className="wedding-wrapper">
         <div className="wed-info">
            <h2>Need Help With Wedding Decorations?</h2>
            <div>From setup to clean up, <br /> We got you covered</div>
            <p>"I still can't believe that such a charming wedding could be produced. If it wasn't for Valleys Flora help, this wedding a lot less colorful" <br /><span>-Fiction Stranger Qoute</span></p>
         </div>
         <img src={require('../assets/wedding.jpg')} className="zoom" alt="wed"/>
      </div>
   )
}

export default Wedding