import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const Nav = () => {
    const [cartItems, setCartItems] = useContext(CartContext)
    let items = cartItems.props
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/">
                    <li>Cart ({cartItems.length})</li>
                </Link>
            </ul>
        </nav>
    )


}

export default Nav