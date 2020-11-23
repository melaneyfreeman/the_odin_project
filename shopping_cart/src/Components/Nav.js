import React from 'react'
import { Link } from 'react-router-dom'
import Shop from './Shop'

function Nav(props) {
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
                

            </ul>
        </nav>
    )
}

export default Nav