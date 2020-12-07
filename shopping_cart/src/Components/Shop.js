import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {ItemContext} from '../ItemContext'
import {CartContext} from '../CartContext'

function Shop() {

    const [items, setItems] = useContext(ItemContext)
    const [cartItems, setCartItems] = useContext(CartContext)

    function updateCart(itemDetail) {
        setCartItems(prevItems => [...prevItems, itemDetail])
        console.log(itemDetail.name)
    }

    return (
        <div>
            <h1>Shop</h1>
            <div className="shop-div">
                {items.map(item => (
                    <div key={item.id}>
                        <h2>
                            <Link to={`/shop/${item.id}`} className="minion-links">
                                <img src={item.image} alt={item.name + ' minion'} className="shop-img" />
                                <br></br>
                                {item.name}
                            </Link>
                        </h2>

                <h4>${item.verminion.speed + "." + item.verminion.attack}</h4>
                <button>-</button>0<button>+</button>
                <br></br>
                <button id={item.id} onClick={e => updateCart(item)}>add</button>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Shop