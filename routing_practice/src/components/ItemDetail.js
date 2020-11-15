import React, { useState, useEffect } from 'react'

function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
    }, [])

    const [shopItem, setItem] = useState({
        data: {
            item: {}
        },
        
    })

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)

        const shopItem = await fetchItem.json()
        setItem(shopItem)
        console.log(shopItem)
    }



    return (
        <div>
            <h2>{shopItem.data.item.name}</h2>
        </div>
    )
}

export default ItemDetail