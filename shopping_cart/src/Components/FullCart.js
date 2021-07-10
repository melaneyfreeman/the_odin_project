import { React, Component, useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import CartItem from './CartItem'
import Cart from './Cart'


function FullCart (){
    
    const [cartItems, setCartItems] = useContext(CartContext)
        return(
            <div>
                <h1>Cart</h1>
                {(cartItems.map(item => (
            <div key={item.id}>
                <CartItem name={item.name}
                    imageSrc={item.icon}
                    imageAlt={item.name}
                    price={item.verminion.speed + "." + item.verminion.attack}

                />
            </div>
              )))} 

            </div>
        )
    
    
}

export default FullCart