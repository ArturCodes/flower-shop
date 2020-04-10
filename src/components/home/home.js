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

               {/* <Carousel.Item>
                  <div className="carousel-3">
                     <img src={require('../assets/other/other-4.png')}
                        alt="First slide" />
                     <Carousel.Caption>
                           <div className="caption-3">
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                           </div>
                     </Carousel.Caption>
                  </div>
               </Carousel.Item> */}

            </Carousel>
            <Footer />
         </div>
      )
   }
}

export default Home

