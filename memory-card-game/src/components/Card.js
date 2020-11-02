import React from 'react';

//component that structures the imgs into a useable div
const Card = ({img, id, handleClick, alt, isFlashing}) => {


    return (
     
            <img className={"cardDiv " + isFlashing} id={id} onClick={(e) => handleClick(e)} src={img} alt={alt}/>

    )
}

export default Card;