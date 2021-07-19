import React, { useState, useEffect, useContext, createFactory } from 'react'
import { CartContext } from '../CartContext'

const CartItem = (props) => {
    const [count, setCount] = useState(1)
    let startPrice = Number(props.price)
    const [price, setPrice] = useState(startPrice)
    const [cartItems, setCartItems] = useContext(CartContext)
    const [itemId, setItemId] = useState(0)

    setItemId(props.name)


    function updateCart(cart){
    
        setCartItems(cart)
 
    }

    function removeItem(id){
            console.log("removing item:" + id)
            //setCartItems(cartItems.filter(obj => obj.id !== id))
            for(var i = cartItems.length -1; i > -1; i--){
                if(cartItems[i].name === id){
                    let newCart = cartItems
                    newCart.splice(i, 1)
                    updateCart(newCart)
                    console.log(newCart)
                    //now we will update the count for the removed item
                    //so it will not pass the render check and not render anything
                    setCount(1)
  
                }
            }
   
    }

    //num is the increment or decrement value (+1 or -1)
    function updateCount(num){
        console.log(count + "adding")
        setCount(count + num)
        updatePrice(count, num)
        
        
    }

    function decreaseCount(id){
        if(count > 0){
            //check if count is able to be decreased without removing the item
            if(count - 1 > 0){
                updateCount(-1)
                console.log(count + "not removing")
               
            }
            //if it will be automatically removed if its decreased
            //we want to remove the item first, and then decrease it once it has been removed
            //so it does not pass the render check before its removed (count > 0)
            //AKA, it will render it if you don't remove it before the render condition
            else if(count -1 <= 0){
                console.log(count + "removing")
                updateCount(1)
                console.log("removing item..." + id)
                removeItem(...arguments)
            }

        }

        if(count < 0){
            console.log(count + "removing")
            updateCount(1)

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


    //instead check if item exists in the cart array
    //**** */

    for(var i = cartItems.length -1; i > -1; i--){
        if(cartItems[i].name === itemId){
            return (
       
                <div>
                    <h4>{props.name}</h4>
                    <img src={props.imageSrc} alt={props.name} />
                    <h5>${price.toFixed(2)}</h5>
                    <button onClick={() => decreaseCount(props.name)}>-</button>
                    <input value={count} onChange={handleChange}/>
                    <button onClick={() => updateCount(1)}>+</button>
                    
                </div>
            )

        }

        else{
        return(
            <div id="deleted"></div>
        )
        
    }
    }

    
    
    
    

    
}

export default CartItem