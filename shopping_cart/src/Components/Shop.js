import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Shop() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://ffxivcollect.com/api/minions?id_in=80..110')
        const items = await data.json();
        console.log(items.results)
        setItems(items.results)
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop