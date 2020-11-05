import './App.css';
import React, { useState } from 'react';
/* components */
import Cards from './components/Cards'
import cards from './components/Cards'
import Main from './components/Main'
import Status from './components/Status'

/* you only want to click cards once, if you click the same card again
   you lose. it is NOT a matching game but a memory game to see if you
   can remember which cards you have clicked previously
   the goal is to click all cards only once */

function App() {
  //states / hooks
  const [cardList, setCardList] = useState(Cards)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [didLose, setDidLose] = useState(false)
  const [didWin, setDidWin] = useState(false)

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
      setDidLose(false)
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
      setDidLose(true)

      
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
    checkWin();
  }

  const checkWin = () => {
    if(score === cardList.length - 1){
      setDidWin(true)
      console.log(score)
    }
  }



  return (
    <div className="App" id="game">
      <div className="scores">
        <h1>SCORE: {score}</h1>

        <h2>High Score: {highScore}</h2>
        <a href="#rules" className="rules">RULES</a>
        <p className="expand" id="rules">
          This is a memory game. To reach the highest possible score (14) you can only click
          a card once. If the card has not been clicked on previously, you will gain a point.
          If you click the same card twice, you will lose and the score will reset.
          Enjoy the stunning artwork of Yoshitaka Amano (天野 喜孝), who created concept art for many
          of the FINAL FANTASY games. Visit his website <a href="https://www.yoshitakaamano.com/" target="_blank" rel="noreferrer">here</a>.
          <br></br>
          <a href="#game" className="close">×</a>
        </p>
      </div>
        
        <Status didLose={didLose} didWin={didWin}/>
        <Main cardList={cardList} handleClick={handleClick}/>

      
    </div>
  );
}

export default App;
