import React from "react"

import "./flowers.scss"

const Flowers = ({data, onAddToCart}) => {


   const mappedItems = data.map((item) => {
      const { name, price, type, src, color, id } = item

      return (
         <div className="mappedFlowers" key={id}>
            <div className="info">
               <h4>{name}</h4>
               <div>Price: ${price}</div>
               <div>Type: {type}</div>
               <div>Colors: {color}</div>
            </div>
            <div className="img">
               <img src={require(`./${src}`)} alt={`{name}`} />
            </div>
            <div className="btn">
               <button onClick={(id) => this.onAddToCart(id)}>Add To Cart</button>
            </div>
         </div>
      )
   })


   return (
      <>
         {mappedItems}
      </>
   )

}

export default Flowers