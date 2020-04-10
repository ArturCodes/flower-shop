import React from 'react'
import './app.scss'
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Shop from "./components/shop/shop"
import Home from "./components/home/home"
import About from "./components/about/about"

import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="global-wrapper">
        <div className="app-wrapper">
          <Header />
          <Navbar />


          {/* switch between components */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>


        </div>
      </div>
    </Router>
  );
}

export default App
