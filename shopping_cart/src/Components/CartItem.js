import React, { useState } from 'react'

const CartItem = (props) => {
    const [count, setCount] = useState(1)
    let startPrice = Number(props.price)
    const [price, setPrice] = useState(startPrice)
    

    function updateCount(){
        setCount(count + 1)
        updatePrice(count)
    }

    function updatePrice(count){
    
            setPrice(startPrice * (count + 1))
            let fixedPrice = Number(price).toFixed(2)
          
            console.log("price: " + fixedPrice + ", count: " + count)
    }
    
    

    return (
        <div>
            <h4>{props.name}</h4>
            <img src={props.imageSrc} alt={props.name} />
            <h5>${price.toFixed(2)}</h5>
            <button onClick={() => updateCount(count)}>+</button>{count}<button>-</button>
        </div>
    )

    
}

export default CartItem