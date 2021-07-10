import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import ShopItem from './Components/ShopItem'
import Cart from './Components/Cart'
import FullCart from './Components/FullCart'
import { ItemProvider } from './ItemContext'
import { CartProvider } from './CartContext'
import ShopItemPopup from './Components/ShopItemPopup';

function App() {

  return (
    <div className="App">

      <Router>
        <Switch>

          <ItemProvider>
            <CartProvider>
              <Nav />
              <Route path="/cart" exact component={FullCart} />

              <Cart />
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/shop/:id" exact component={ShopItem} />

            </CartProvider>
          </ItemProvider>
        </Switch>

      </Router>
    </div>

  )

}


export default App;
