import React from 'react';
//component that structures the imgs into a useable div

const Card = ({img, id, handleClick}) => {
    return (
        <div className="cardDiv" id={id} onClick={(e) => handleClick(e)}>
            <h1>card {img}</h1>
        </div>
    )
}

export default Card;