import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ItemContext } from '../ItemContext'
import { CartContext } from '../CartContext'
import Item from './Item'

function Shop() {

    const [items, setItems] = useContext(ItemContext)
    const [cartItems, setCartItems] = useContext(CartContext)

    const [count, setCount] = useState(1)

    function updateCart(itemDetail) {
        setCartItems(prevItems => [...prevItems, itemDetail])
        console.log(itemDetail.name)
    }

    function updateQuantity(id, num){

    }


    return (
        <div>
            <h1>Shop</h1>
            <div className="shop-div">
                {items.map(item => (
                    <div key={item.id}>
                        <h2>
                        <Link to={`/shop/${item.id}`} className="minion-links">
                            <Item name={item.name}
                                imageSrc={item.image}
                                imageAlt={item.name}
                                price={item.verminion.speed + "." + item.verminion.attack} />
                        </Link>
                        </h2>
                        <button id={item.id} onClick={e => updateCart(item)}>add</button>
                        
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Shop