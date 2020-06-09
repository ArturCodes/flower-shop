import React, { Component } from "react"
import './shop.scss'
import Footer from "../footer/footer"
import Filter from './filter/filter'

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
      cart: [],
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
      this.setState(({ flowers }) => {
         const idx = flowers.findIndex((item) => item.id === id)
         console.log(idx)
      })
   }

   render() {
      const { flowers } = this.state
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
            <Filter />
            <div className="shop-wrapper">
               {mappedFlowers}
            </div>
            <Footer />
         </div>
      )
   }

} 
