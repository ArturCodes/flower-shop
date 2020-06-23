import React, { Component } from "react"
import './shop.scss'
import Footer from "../footer/footer"
// import Filter from './filter/filter'

export default class Shop extends Component {
   maxId = 0
   state = {
      flowers: [
         this.flowerData("The Mata", "20", "Basket", "Pink", 'basket/b1.png'),
         this.flowerData("Nixki Basket", "25", "Basket", "Pink", "basket/b2.png"),
         this.flowerData("Nadies Basket", "30", "Basket", "Multicolor", 'basket/b3.png'),
         this.flowerData("Nami Alaw Basket", "30", "Basket", "Multicolor", 'basket/b4.png'),
         this.flowerData("Tall Pink Basket", "40", "Basket", "Pink", 'basket/b5.png'),

         this.flowerData("Pink Fraser ", "25", "Bouquet", "Pink", 'bouquet/bq.png'),
         this.flowerData("Annies Bouquet", "40", "Bouquet", "Multicolor", 'bouquet/bq2.png'),
         this.flowerData("Rose Bouquet", "20", "Bouquet", "Pink", 'bouquet/bq3.png'),
         this.flowerData("Holiday Matilda", "30", "Bouquet", "Multicolor", 'bouquet/bq4.png'),

         this.flowerData("Life's Milkweed", "25", "Vase", "Blue", 'vase/v.png'),
         this.flowerData("Sunflowers", "20", "Vase", "Yellow", 'vase/v1.png'),
         this.flowerData("Jacinthe de Farceur", "20", "Vase", "Multicolor", 'vase/v2.png'),
         this.flowerData("Happy Azolla", "30", "Vase", "Purple", 'vase/v3.png'),
         this.flowerData("Rose Othine", "30", "Vase", "Red", 'vase/v4.png'),
         this.flowerData("Cliff Wild Rose", "30", "Vase", "Red", 'vase/v5.png'),
         this.flowerData("The Croom", "30", "Vase", "Multicolor", 'vase/v6.png'),
         this.flowerData("Vigne Tranquille", "40", "Vase", "Multicolor", 'vase/v7.png'),
         this.flowerData("Moon Bloom", "40", "Vase", "White", 'vase/v8.png'),
         this.flowerData("Doue Yawn", "40", "Vase", "Multicolor", 'vase/v9.png'),
      ],
      filter: '',
      color: 'all',
      type: 'all',
      cart: '',
      visibleItems: ''
   }

   flowerData(name, price, type, colors, src) {
      return {
         name: name,
         price: price,
         type: type,
         src: src,
         color: colors,
         id: this.maxId++
      }
   }


   addToCart = (id) => {
      this.setState(({ flowers, cart }) => {
         const idx = flowers.findIndex((item) => item.id === id)
         const findIdx = flowers.findIndex((item) => item.id === idx)
         const addToCart = flowers[findIdx]
         const added = [...cart, addToCart]
         return {
            cart: added
         }
      })
   }

   onSelection = (e) => {
      const { flowers } = this.state
      const propType = e.target.id
      const PropValue = e.target.value

      const filtered = flowers.filter(item => item[propType] === PropValue)
      console.log(filtered)

      this.setState({
         [propType]: PropValue, // sets state for Color and Type
         visibleItems: filtered
      })
   }




   render() {
      const { flowers, color, type, } = this.state

      const mappedFlowers = flowers.map((item) => {
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
                  <img src={require(`./flowers/${src}`)} alt={`{name}`} />
               </div>
               <div className="btn">
                  <button onClick={() => this.addToCart(id)}>Add To Cart</button>
               </div>
            </div>
         )
      })


      return (
         <div>
            {/* ████████████████████████████████
               Couldn't get the component props passed / get the state to work. 
            So I just brought he whole Filter component here x_x */}
            <div className="filter-wrappper">
               <form className="color-filter">
                  <label htmlFor="color">Sort by Color: </label>
                  <select value={color} onChange={this.onSelection} id="color">
                     <option value="All">All</option>
                     <option value="Blue">Blue</option>
                     <option value="Pink">Pink</option>
                     <option value="Purple">Purple</option>
                     <option value="Red">Red</option>
                     <option value="White">White</option>
                     <option value="Yellow">Yellow</option>
                     <option value="Multicolor">Multicolor</option>
                  </select>
                  <label htmlFor="type">Sort by Type: </label>
                  <select value={type} onChange={this.onSelection} id="type">
                     <option value="All">All</option>
                     <option value="Vase">Vase</option>
                     <option value="Basket">Basket</option>
                     <option value="Bouquet">Bouquet</option>
                  </select>
               </form>
            </div>
            {/* If i figure it out, ill refactor this code later */}
            {/* ████████████████████████████████ */}

            <div className="shop-wrapper">
               {mappedFlowers}
            </div>

            <Footer />
         </div>
      )
   }

} 
