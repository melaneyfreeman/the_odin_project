import React, { useState, useEffect, useContext, createFactory } from 'react'
import { CartContext } from '../CartContext'

const CartItem = (props) => {
    const [count, setCount] = useState(1)
    let startPrice = Number(props.price)
    const [price, setPrice] = useState(startPrice)
    const [cartItems, setCartItems] = useContext(CartContext)
    const [itemId, setItemId] = useState(0)

    const[foundItem, setFoundItem] = useState(undefined)

    function updateCart(cart){
    
        setCartItems([])
        setCartItems(cart)
        console.log("cart from update")
        console.log(cartItems)
 
    }

    function removeItem(id){
            console.log("removing this item: " + id)
            //setCartItems(cartItems.filter(obj => obj.id !== id))
      
                console.log("here 1")
                for(var i = cartItems.length -1; i > -1; i--){
                    if(cartItems[i].name === id){
                        resetCount()

                        let newCart = cartItems
                        newCart.splice(i, 1)
                        setCartItems([])
                        setCartItems(newCart)
                        console.log("new cart:")
                        console.log(newCart)
                        updateCart(newCart)
                     
      
                    }
                }
            }
      
          
   
    

    //num is the amount to increment by
    function updateCount(num){
        
        console.log(count + "addingggg")
        setCount(count + num)
        updatePrice(count, num)
        
        
    }

    function resetCount(){
        console.log("resetting count")
        setCount(0)
        updatePrice(0, 0)
    }

    function decreaseCount(id){
        setItemId(id)
        if(count > 0){
            //check if count is able to be decreased without removing the item
            if(count - 1 > 0){
                updateCount(-1)
                console.log(count + "not removing")
               
            }
         
            else if(count -1 <= 0){

                console.log("removing item... " + id)
                removeItem(...arguments)
                console.log(count + " removing " + id )
                //resetCount()

            }

            else if(count === 0){
                removeItem(...arguments)

            }

        }

        if(count < 0){
            removeItem(...arguments)
            console.log(count + " removing " + id)
            //resetCount()

        }
        if(count === 0){
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
    let found = (cartItems.find(foundItem => foundItem.name === props.name))
    console.log("is it found?" + found)
    if(found && count === 0){
        setCount(1)
    }

    for(let i = 0; i < cartItems.length; i++){
        let totalPrice = 0
        totalPrice += price.toFixed(2)
        console.log("total " + totalPrice)
    }


    if(found && count !== 0){
        

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
            <></>
        )
        
    }
    

    
}

export default CartItem