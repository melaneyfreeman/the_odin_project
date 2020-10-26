import React from 'react';
import Card from './Card'
import Cards from './Cards'

const Main = ({cardList, handleClick}) => {

    return(
        <div className="Main">
            <div>
                {cardList.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        handleClick={handleClick}
                        img={card.img}
                    />
                ))}
               
            </div>
        </div>
    )

}

export default Main;