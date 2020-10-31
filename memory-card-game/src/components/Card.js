import React from 'react';

//component that structures the imgs into a useable div
const Card = ({img, id, handleClick, alt}) => {
    return (
     
            <img className="cardDiv" id={id} onClick={(e) => handleClick(e)} src={img} alt={alt}/>

    )
}

export default Card;