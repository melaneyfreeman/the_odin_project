import React from 'react';

//component that structures the imgs into a useable div
const Card = ({img, id, handleClick}) => {
    return (
        <div className="cardDiv" id={id} onClick={(e) => handleClick(e)}>
            card {img}
        </div>
    )
}

export default Card;