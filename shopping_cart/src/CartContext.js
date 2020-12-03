import { React, createContext, useEffect, useState, useContext } from 'react'
import {ItemContext} from './ItemContext'

export const CartContext = createContext()

export const CartProvider = (props) => {

    const [items, setItems] = useContext(ItemContext)

    const [cartItems, setCartItems] = useState([
        
    ])

    console.log("cart items from cart context")
    console.log(cartItems)

    return (
        <CartContext.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </CartContext.Provider>
    )
}