import React from 'react'
import './about.scss'
import Footer from '../footer/footer'
import Copyright from '../copyright/copyright'
import LoremBlocks from '../lorem-blocks/lorem-blocks'

const About = () => {
   return (
      <div className="about-wrapper">
         <div>
            <div className="est">
               <h1>Established in 2024</h1>
               <LoremBlocks />
               <br />
               <LoremBlocks />
               <br />
               <LoremBlocks />
            </div>
         </div>

         <Footer />
         <Copyright />
      </div>
   )
}

export default About