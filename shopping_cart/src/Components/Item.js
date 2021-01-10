import React, { useState } from 'react'

const Item = (props) => {
    const [price, setPrice] = useState(props.price)
    

    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <h4>{props.enhanced_description}</h4>
            <img src={props.imageSrc} alt={props.name} />
            <h5>{props.tooltip}</h5>
            <h4>${Number(props.price).toFixed(2)}</h4>
        
        </div>
    )

    
}

export default Item