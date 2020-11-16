import React, { useState, useEffect } from 'react'

function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
    }, [])

    const [shopItem, setItem] = useState({
        data: {
            item: {

                images: {

                }
            }
        },

    })

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)

        const shopItem = await fetchItem.json()
        setItem(shopItem)
        console.log(shopItem)
    }



    return (
        <div className="shopItem-div">
            <img src={shopItem.data.item.images.background} alt="" className="shopItem-img"></img>
            <div className="shopItem-info">
                <h2>{shopItem.data.item.name}</h2>
                <h3>{shopItem.data.item.description}</h3>
                <h4>{shopItem.data.item.cost} {shopItem.data.item.obtained_type}</h4>
                <h5>{shopItem.data.item.rarity}</h5>
            </div>
        </div>
    )
}

export default ItemDetail