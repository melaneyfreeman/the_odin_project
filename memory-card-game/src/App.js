import './App.css';
import React, { useState } from 'react';
import Card from './components/Card'

/* components */
import Cards from './components/Cards'
import cards from './components/Cards'
import Main from './components/Main'

import ewer from './images/ewer.png'


/* you only want to click cards once, if you click the same card again
   you lose. it is NOT a matching game but a memory game to see if you
   can remember which cards you have clicked previously
   the goal is to click all cards only once */

function App() {
  //states / hooks
  const [cardList, setCardList] = useState(Cards)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  console.log(cardList)

  const handleClick = (event) => {
    const clickedCard = cards.find((card) => card.id === event.target.id)
    console.log("clicked this card: " + event.target.id)

    /*check if card has been clicked already to determine score */
    /* ---> if card has not been clicked yet, change isClicked to true
            and increment score */
    if(!clickedCard.isClicked){
      clickedCard.isClicked = true;
      console.log(event.target.id + " has been clicked")
      setCardList(cards)
      incrementScore();
    }

    /* ---> if card has been clicked, reset isClicked for all cards in cardList
            and reset score */
    else{
      clickedCard.isClicked = null;
      setCardList(cards)
      console.log(event.target.id + " already clicked, here's card list to check: ")
      console.log(cardList)
      console.log("resetting card list... ")
      resetIsClicked(cardList);
      setScore(0);
      
      /* ---> set high score */
      if(score > highScore){
        setHighScore(score)
      }
    }
  }

  const resetIsClicked = (array) => {
    array.forEach((card) => {
      card.isClicked = false;
    });
    setCardList(array)
  }
  
  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1)
  }



  return (
    <div className="App">
      <div className="scores">
      <h1>Score: {score}</h1>
      <h2>High Score: {highScore}</h2>
      </div>
      
        <Main cardList={cardList} handleClick={handleClick}/>
      
    </div>
  );
}

export default App;
