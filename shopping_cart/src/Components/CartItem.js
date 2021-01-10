import React, { useState} from 'react'

const CartItem = (props) => {
    const [count, setCount] = useState(1)
    let startPrice = Number(props.price)
    const [price, setPrice] = useState(startPrice)
    

    //num is the increment or decrement value (+1 or -1)
    function updateCount(num){
        setCount(count + num)
        updatePrice(count, num)
    }

    function updatePrice(count, num){
            setPrice(startPrice * (count + num))
            let fixedPrice = Number(price).toFixed(2)
            console.log("price: " + fixedPrice + ", count: " + count)
    }

    function handleChange(event){
        //have to convert to int so that when the user clicks
        //the + or - button it will decrease the value as an int
        let formValue = parseInt(event.target.value)
        setCount(formValue)
        
    }
    
    
    if(count >= 1){
        return (
       
            <div>
                <h4>{props.name}</h4>
                <img src={props.imageSrc} alt={props.name} />
                <h5>${price.toFixed(2)}</h5>
                <button onClick={() => updateCount(1)}>+</button>
                <input value={count} onChange={handleChange}/>
                <button onClick={() => updateCount(-1)}>-</button>
            </div>
        )
    }
    else{
        return ""
    }
    

    
}

export default CartItem