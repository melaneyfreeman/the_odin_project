import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import ItemDetail from './components/ItemDetail'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" exact component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;