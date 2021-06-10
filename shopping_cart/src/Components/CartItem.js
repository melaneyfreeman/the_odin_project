import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../CartContext'

const CartItem = (props) => {
    const [count, setCount] = useState(1)
    let startPrice = Number(props.price)
    const [price, setPrice] = useState(startPrice)
    const [cartItems, setCartItems] = useContext(CartContext)

    function updateCart(cart){
        console.log('updating cart receiving cart:')
        setCartItems(cart)
        console.log(cartItems)
    }

    function removeItem(id){
            console.log("removing item:" + id)
            //setCartItems(cartItems.filter(obj => obj.id !== id))
            for(var i = cartItems.length -1; i > -1; i--){
                if(cartItems[i].name === id){
                    let newCart = cartItems.splice(i, 1)
                    console.log("below is array after removed")
                    updateCart(newCart)
                    
                }
            }
   
    }

    //num is the increment or decrement value (+1 or -1)
    function updateCount(num){
        setCount(count + num)
        updatePrice(count, num)
        console.log(count)
        //return
       
    }

    function decreaseCount(id){

        console.log('THIS IS WHAT THE ID IS:' + id)
        if(count > 0){
            updateCount(-1)
        }
        //if count is 0 
        else if(count ===0 || count <= 0){
            removeItem(...arguments)
        }
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

    
    if(count > 0){
        

        return (
       
            <div>
                <h4>{props.name}</h4>
                <img src={props.imageSrc} alt={props.name} />
                <h5>${price.toFixed(2)}</h5>
                <button onClick={() => updateCount(1)}>+</button>
                <input value={count} onChange={handleChange}/>
                <button onClick={() => decreaseCount(props.name)}>-</button>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
        
    }
    

    
}

export default CartItem