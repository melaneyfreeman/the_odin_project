import './App.css';
import React, { useState } from 'react';
import Card from './components/Card'
import Cards from './components/Cards'
import cards from './components/Cards'
import Main from './components/Main'

function App() {
  //states / hooks
  const [cardList, setCardList] = useState(Cards)
  console.log(cardList)

  const handleClick = (event) => {
    const clickedCard = cards.find((card) => card.id === event.target.id)
  }


  return (
    <div className="App">
      <Main cardList={cardList} handleClick={handleClick}></Main>
    </div>
  );
}

export default App;
