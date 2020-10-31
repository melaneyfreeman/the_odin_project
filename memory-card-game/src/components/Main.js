import React from 'react';
import Card from './Card'
import Cards from './Cards'

const Main = ({cardList, handleClick}) => {

    return(
        <div className="Main">
            
                {cardList.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        handleClick={handleClick}
                        img={card.img}
                        alt={card.alt}
                    />
                ))}
               
          
        </div>
    )

}

export default Main;