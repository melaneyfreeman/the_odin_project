import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import ShopItem from './Components/ShopItem'
import Cart from './Components/Cart'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/shop/:id" component={ShopItem}/>
          <Route path="/cart" component={Cart}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
