import {React, useContext, useEffect, useState} from 'react'
import {CartContext} from '../CartContext'

function Cart(props){

    const [cartItems, setCartItems] = useContext(CartContext)
    console.log("cart items to be in cart: " + cartItems)
        return(
            <div className="cart">
                <h3>Cart</h3>
                <h4>{cartItems}</h4>

                <button onClick={emptyCart}>empty cart</button>
            </div>
        )
    
        function emptyCart(){
            let emptiedCart = []
            setCartItems(emptiedCart)
        }
    
    
}

export default Cart