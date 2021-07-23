import { React, useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import CartItem from './CartItem'

function Cart(props) {
    const [cartItems, setCartItems] = useContext(CartContext)

    //check if we are on the shop page or not to decide whether we should render the
    //sidebar cart component
    if(window.location.pathname !== "/cart"){
    return (
        <div className="cart" id="cart" >
             <button onClick={emptyCart}>empty cart</button>
            <h3>Cart</h3>
            {(cartItems.map(item => (
            <div key={item.id}>
                <CartItem name={item.name}
                    imageSrc={item.icon}
                    imageAlt={item.name}
                    price={item.verminion.speed + "." + item.verminion.attack}

                />
                {item.name}
            </div>
              )))}  
        </div>
    )
   }

   //if not 
   else{
       return <> </>
   }
   

    function emptyCart() {
        let emptiedCart = []
        setCartItems(emptiedCart)
    }


}

export default Cart