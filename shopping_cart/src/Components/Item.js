import React, { useState } from 'react'

const Item = (props) => {
    const [price, setPrice] = useState(props.price)
    

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <h2>{props.enhanced_description}</h2>
            <img src={props.imageSrc} alt={props.name} />
            <h5>{props.tooltip}</h5>
            <h4>${Number(props.price).toFixed(2)}</h4>
        </div>
    )

    
}

export default Item