import React, { Component } from "react";
import "./shop.scss";
import Footer from "../footer/footer";
import Flowers from "./flowers/flowers";

export default class Shop extends Component {
  maxId = 0;
  state = {
    flowers: [
      this.flowerData("The Mata", "20", "Basket", "Pink", "basket/b1.png"),
      this.flowerData("Nixki Basket", "25", "Basket", "Pink", "basket/b2.png"),
      this.flowerData(
        "Nadies Basket",
        "30",
        "Basket",
        "Multicolor",
        "basket/b3.png"
      ),
      this.flowerData(
        "Nami Alaw Basket",
        "30",
        "Basket",
        "Multicolor",
        "basket/b4.png"
      ),
      this.flowerData(
        "Tall Pink Basket",
        "40",
        "Basket",
        "Pink",
        "basket/b5.png"
      ),

      this.flowerData(
        "Pink Fraser ",
        "25",
        "Bouquet",
        "Pink",
        "bouquet/bq.png"
      ),
      this.flowerData(
        "Annies Bouquet",
        "40",
        "Bouquet",
        "Multicolor",
        "bouquet/bq2.png"
      ),
      this.flowerData(
        "Rose Bouquet",
        "20",
        "Bouquet",
        "Pink",
        "bouquet/bq3.png"
      ),
      this.flowerData(
        "Holiday Matilda",
        "30",
        "Bouquet",
        "Multicolor",
        "bouquet/bq4.png"
      ),

      this.flowerData("Life's Milkweed", "25", "Vase", "Blue", "vase/v.png"),
      this.flowerData("Sunflowers", "20", "Vase", "Yellow", "vase/v1.png"),
      this.flowerData(
        "Jacinthe de Farceur",
        "20",
        "Vase",
        "Multicolor",
        "vase/v2.png"
      ),
      this.flowerData("Happy Azolla", "30", "Vase", "Purple", "vase/v3.png"),
      this.flowerData("Rose Othine", "30", "Vase", "Red", "vase/v4.png"),
      this.flowerData("Cliff Wild Rose", "30", "Vase", "Red", "vase/v5.png"),
      this.flowerData("The Croom", "30", "Vase", "Multicolor", "vase/v6.png"),
      this.flowerData(
        "Vigne Tranquille",
        "40",
        "Vase",
        "Multicolor",
        "vase/v7.png"
      ),
      this.flowerData("Moon Bloom", "40", "Vase", "White", "vase/v8.png"),
      this.flowerData("Doue Yawn", "40", "Vase", "Multicolor", "vase/v9.png"),
    ],
    color: "All",
    type: "All",
    cart: "",
    visibleItems: "All",
  };

  flowerData(name, price, type, colors, src) {
    return {
      name: name,
      price: price,
      type: type,
      src: src,
      color: colors,
      id: this.maxId++,
    };
  }

  addToCart = (id) => {
    console.log(id);
    this.setState(({ flowers, cart }) => {
      const idx = flowers.findIndex((item) => item.id === id);
      const findIdx = flowers.findIndex((item) => item.id === idx);
      const addToCart = flowers[findIdx];
      const added = [...cart, addToCart];
      console.log(added);
      return {
        cart: added,
      };
    });
  };

  onSelection = (e) => {
    const { flowers } = this.state;
    const propType = e.target.id;
    const PropValue = e.target.value;

    const filtered = flowers.filter((item) => {
      return item[propType] === PropValue;
    });

    console.log(filtered);

    if (PropValue === "All") {
      this.setState({
        [propType]: "All",
        visibleItems: "All",
      });
    } else {
      this.setState({
        [propType]: PropValue,
        visibleItems: filtered,
      });
    }
  };

  render() {
    const { color, type, flowers, visibleItems, cart } = this.state;

    const visible =
      visibleItems === "All" ? (
        <Flowers data={flowers} onAddToCart={this.addToCart} />
      ) : (
        <Flowers data={visibleItems} onAddToCart={this.addToCart} />
      );

    return (
      <div>
        {/* Filter Component - which i had trouble seperating to its own component */}
        <div className="filter-wrappper">
          <form className="filters">
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
            Cart: {cart.length} Items
          </form>
        </div>

        <div className="shop-wrapper">{visible}</div>

        <Footer />
      </div>
    );
  }
}

 