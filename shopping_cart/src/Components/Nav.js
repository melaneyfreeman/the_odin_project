import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return(
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
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Nav