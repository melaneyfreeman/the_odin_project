import { React, Component, useContext, useEffect, useState } from 'react'
import {CartContext} from '../CartContext'


const Item = (props) => {
    const [price, setPrice] = useState(props.price)

    const [cartItems, setCartItems] = useContext(CartContext)

    function updateCart(newitem) {
        setCartItems(prevItems => [...prevItems, newitem])
    }

    return (
        <div className="shopItem">
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <h4>{props.enhanced_description}</h4>
            <img src={props.imageSrc} alt={props.name} />
            <h5>{props.tooltip}</h5>
            <h4>${Number(props.price).toFixed(2)}</h4>
            
        
        </div>

        /* <button id={props.id} onClick={e => updateCart(props)}>add to cart</button> */
    )

    
}

export default Item