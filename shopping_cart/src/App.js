import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import ShopItem from './Components/ShopItem'
import Cart from './Components/Cart'


class App extends Component {
  constructor() {
    super()

    this.state = {
      showCart: true,
      cartCount: 0,
      cartItems: []

    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Cart/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" exact component={ShopItem} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
