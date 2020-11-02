import React from 'react';
import Card from './Card'

const Main = ({cardList, handleClick}) => {

    const shuffle = (array) => {
        for(let i = 0; i < array.length; i++){
                setTimeout(function(){
                    array[i].isFlashing = false;
                 }, Math.random() * .3);
                 array[i].isFlashing = true;

        }

        let currentIndex = array.length
        let temporaryValue
        let randomIndex

        //while loop --> while there are array elements
        //yet to be shuffled
        while(0 !== currentIndex){
            //chose an element not yet shuffled
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            //swap index not yet shuffled with current index
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }

    

        return array;
    }

        shuffle(cardList)

  

    return(
        <div className="Main">     
                {cardList.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        handleClick={handleClick}
                        img={card.img}
                        alt={card.alt}
                        isFlashing={card.isFlashing}
                    />
                ))}
        </div>
    )
}

export default Main;