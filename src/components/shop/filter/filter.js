import React from "react"
import './filter.scss'

export default class Filter extends React.Component {
   
   render() {


      return (

         <div>
            <form className="color-filter">
               <label htmlFor="color">Sort by Color: </label>
               <select name="color" id="color">
                  <option value="all">All</option>
                  <option value="blue">Blue</option>
                  <option value="pink">Pink</option>
                  <option value="purple">Purple</option>
                  <option value="red">Red</option>
                  <option value="white">White</option>
                  <option value="yellow">Yellow</option>
               </select>
            </form>
         </div >
      )
   }
}