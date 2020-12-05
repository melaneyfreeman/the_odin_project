import React from 'react'

const Item = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <h2>{props.enhanced_description}</h2>
            <img src={props.imageSrc} alt={props.name} />
            <h5>{props.tooltip}</h5>
            <h4>${props.price}</h4>
        </div>
    )

    
}

export default Item