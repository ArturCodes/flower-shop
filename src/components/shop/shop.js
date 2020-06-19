import React, { Component } from "react"
import './shop.scss'
import Footer from "../footer/footer"
// import Filter from './filter/filter'

export default class Shop extends Component {
   maxId = 0
   state = {
      flowers: [
         this.flowerData("The Mata", "$20.00", "Basket", ["Pink"], 'basket/b1.png'),
         this.flowerData("Nixki Basket", "$25.00", "Basket", ["Pink"], "basket/b2.png"),
         this.flowerData("Nadies Basket", "$30.00", "Basket", ["Pink ", "White "], 'basket/b3.png'),
         this.flowerData("Nami Alaw Basket", "$30.00", "Basket", ["Pink ", "Red ",], 'basket/b4.png'),
         this.flowerData("Tall Pink Basket", "$40.00", "Basket", ["Pink"], 'basket/b5.png'),

         this.flowerData("Pink Fraser ", "$25.00", "Bouquet", ["Pink"], 'bouquet/bq.png'),
         this.flowerData("Annies Bouquet", "$40.00", "Bouquet", ["Red ", "White ", "Pink "], 'bouquet/bq2.png'),
         this.flowerData("Rose Bouquet", "$20.00", "Bouquet", ["Pink"], 'bouquet/bq3.png'),
         this.flowerData("Holiday Matilda", "$30.00", "Bouquet", ["Pink ", "Blue "], 'bouquet/bq4.png'),

         this.flowerData("Life's Milkweed", "$25.00", "Vase", ["Blue"], 'vase/v.png'),
         this.flowerData("Sunflowers", "$20.00", "Vase", ["White ", "Yellow"], 'vase/v1.png'),
         this.flowerData("Jacinthe de Farceur", "$20.00", "Vase", ["Pink ", "Purple "], 'vase/v2.png'),
         this.flowerData("Happy Azolla", "$30.00", "Vase", ["Purple "], 'vase/v3.png'),
         this.flowerData("Rose Othine", "$30.00", "Vase", ["Red "], 'vase/v4.png'),
         this.flowerData("Cliff Wild Rose", "$30.00", "Vase", ["Red "], 'vase/v5.png'),
         this.flowerData("The Croom", "$30.00", "Vase", ["White ", "Red "], 'vase/v6.png'),
         this.flowerData("Vigne Tranquille", "$40.00", "Vase", ["White ", "Red ", "Pink "], 'vase/v7.png'),
         this.flowerData("Moon Bloom", "$40.00", "Vase", ["White"], 'vase/v8.png'),
         this.flowerData("Vigne Tranquille", "$40.00", "Vase", ["White ", "Yellow"], 'vase/v9.png'),
      ],
      filter: '',
      color: 'all',
      type: 'all',
      cart: [],
      visibleItems: []
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
      const propType = e.target.id
      const PropValue = e.target.value
      this.setState({
         [propType]: PropValue,
         visibleItems: this.switchColor(propType, PropValue)
      })
   }

   switchColor(prop, value) {
      console.log(prop)
      console.log(value)

      this.setState(({ flowers }) => {
         const filteredFlowers = flowers.filter( flowers => flowers[this.prop] === flowers.type) 

         console.log(filteredFlowers)
 
         return (
            [...filteredFlowers]
         )
      })
   }

   render() {
      const { flowers, color, type, visibleItems } = this.state

      const mappedFlowers = flowers.map((item) => {
         const { name, price, type, src, color, id } = item
         return (
            <div className="mappedFlowers" key={id}>
               <div className="info">
                  <h4>{name}</h4>
                  <div>Price: {price}</div>
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
                  {visibleItems}
                  <label htmlFor="color">Sort by Color: </label>
                  <select value={color} onChange={this.onSelection} id="color">
                     <option value="all">All</option>
                     <option value="blue">Blue</option>
                     <option value="pink">Pink</option>
                     <option value="purple">Purple</option>
                     <option value="red">Red</option>
                     <option value="white">White</option>
                     <option value="yellow">Yellow</option>
                  </select>
                  <label htmlFor="type">Sort by Type: </label>
                  <select value={type} onChange={this.onSelection} id="type">
                     <option value="all">All</option>
                     <option value="vase">Vase</option>
                     <option value="basket">Basket</option>
                     <option value="bouquet">Bouquet</option>
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
