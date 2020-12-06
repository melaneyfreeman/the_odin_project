import {React, useContext, useEffect, useState} from 'react'
import {CartContext} from '../CartContext'

function Cart(props){

    const [cartItems, setCartItems] = useContext(CartContext)
    console.log(cartItems)
        return(
            <div className="cart">
                <h3>Cart</h3>
                <h4>{(cartItems.map(item => (
                    <div key={item.id}>{item.name} 
                    <br></br>
                    <img src={item.icon} alt={item.id}/>
                    <br></br>
                    {"$" + item.verminion.speed + "." + item.verminion.attack}
                    <br></br>
                    <button>-</button>{1}<button>+</button>
                    </div>
                )))}</h4>

                <button onClick={emptyCart}>empty cart</button>
            </div>
        )
    
        function emptyCart(){
            let emptiedCart = []
            setCartItems(emptiedCart)
        }
    
    
}

export default Cart