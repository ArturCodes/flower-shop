import React from "react"
import "./home.scss"
import Carousel from "react-bootstrap/Carousel"
import Footer from "../footer/footer"

class Home extends React.Component {


   render() {

      return (
         <div className="home-wrapper">

            <Carousel className="carousel-wrapper">

               <Carousel.Item>
                  <div className="carousel carousel-1">

                     <div className="carousel-img">
                        <img src={require('../assets/basket/basket-red.png')}
                           alt="First slide" />
                     </div>

                     <div className="caption caption-1">
                        <h1>Flower Baskets For Every Ocassion</h1>
                        <p>A Bundle Of Wonder </p>
                     </div>

                  </div>
               </Carousel.Item>

               <Carousel.Item>
                  <div className="carousel carousel-2">

                     <div className="caption caption-2">
                        <h1>Maybe Something Mellow and Yellow? </h1>
                        <p>For Comfort and Warmness</p>
                     </div>

                     <div className="carousel-img">
                        <img src={require('../assets/vase/vase-yellow.png')} alt="First slide" />
                     </div>

                  </div>
               </Carousel.Item>

               <Carousel.Item>
                  <div className="carousel carousel-3">

                     <div className="carousel-img">
                        <img src={require('../assets/bg/2.png')}
                           alt="First slide" />
                     </div>

                     <div className="caption caption-3">
                        <h1>Flowers to Anywhere and Anytime <br/> for the low low price of</h1>
                        <p>2 Limbs and a Liver</p>
                     </div>

                  </div>
               </Carousel.Item>

            </Carousel>
            <Footer />
         </div>
      )
   }
}

export default Home

