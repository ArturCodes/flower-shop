import React from "react"
import './filter.scss'

export default class Filter extends React.Component {

   state = {
      color: 'all',
      type: 'all',
   }


   onSelection = (e, id) => {
      const propType = e.target.id
      this.setState({
         [propType]: e.target.value
      })
   }

   render() {
      const { color, type } = this.state
      const { onSelection } = this.props

      return (
         <div>
            {color} {type}
            <form className="color-filter">
               <label htmlFor="color">Sort by Color: </label>
               <select value={color} onChange={() => onSelection()} id="color">
                  <option value="all">All</option>
                  <option value="blue">Blue</option>
                  <option value="pink">Pink</option>
                  <option value="purple">Purple</option>
                  <option value="red">Red</option>
                  <option value="white">White</option>
                  <option value="yellow">Yellow</option>
               </select>

               <label htmlFor="type">Sort by Type: </label>
               <select value={type} onChange={() => onSelection()} id="type">
                  <option value="all">All</option>
                  <option value="vase">Vase</option>
                  <option value="basket">Basket</option>
                  <option value="bouquet">Bouquet</option>
               </select>

            </form>

         </div >
      )
   }
}