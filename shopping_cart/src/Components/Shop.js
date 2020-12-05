import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {ItemContext} from '../ItemContext'

function Shop() {

    const [items, setItems] = useContext(ItemContext)

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

                    </div>
                ))}


            </div>
        </div>
    )
}

export default Shop