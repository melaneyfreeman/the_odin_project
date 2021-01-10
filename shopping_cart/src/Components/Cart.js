import { React, useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import CartItem from './CartItem'

function Cart(props) {
    const [cartItems, setCartItems] = useContext(CartContext)

    console.log(cartItems)
    return (
        <div className="cart" >
            <h3>Cart</h3>
            {(cartItems.map(item => (
                <div key={item.id}>
                    <CartItem name={item.name}
                        imageSrc={item.icon}
                        imageAlt={item.name}
                        price={item.verminion.speed + "." + item.verminion.attack}

                    />
                </div>
            )))}

            <button onClick={emptyCart}>empty cart</button>
        </div>
    )

    function emptyCart() {
        let emptiedCart = []
        setCartItems(emptiedCart)
    }


}

export default Cart