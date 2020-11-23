import { createEvent } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import Cart from './Cart'


function ShopItem({ match }) {
    useEffect(() => {
        fetchItem();
    }, [])

    let cart = (<Cart/>)

    const [itemDetail, setItemDetail] = useState({
        results: {
            name: {

            }
        }
    })


    const fetchItem = async () => {
        const fetchItem = await fetch(`https://ffxivcollect.com/api/minions?id_in=${match.params.id}`)
        const itemDetail = await fetchItem.json()
        setItemDetail(itemDetail.results[0])
        console.log(itemDetail.results[0])
    }

    function addToCart(id){
        console.log("button clicked" + id)
        cart = (
            <Cart item={id}/>
        )
    }
    

    return (
        <div>
        {cart}
        <div className="shop-item">
            <h1>{itemDetail.name}</h1>
            <h2>{itemDetail.description}</h2>
            <h2>{itemDetail.enhanced_description}</h2>
            <img src={itemDetail.image} alt={itemDetail.name}></img>
            <h5>{itemDetail.tooltip}</h5>
            <h4>Price: {itemDetail.patch}</h4>
            <button id={itemDetail.id} onClick={e => addToCart(e.target.id)}>add to cart</button>
        </div>
        </div>
    )
}

export default ShopItem