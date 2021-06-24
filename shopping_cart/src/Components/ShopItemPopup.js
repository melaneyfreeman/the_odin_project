
import { React, Component, useContext, useEffect, useState } from 'react'
import Item from './Item'
import { ItemContext } from '../ItemContext'
import { CartContext } from '../CartContext'


const ShopItemPopup = (props) => {
    useEffect(() => {
        fetchItem()
    }, [])

    const [itemDetail, setItemDetail] = useState({
        results: {
            name: {

            }

        },
        verminion: {}
    })

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://ffxivcollect.com/api/minions?id_in=${props.id}`)
        const itemDetail = await fetchItem.json()
        setItemDetail(itemDetail.results[0])
    }

    return (
        <div>
            <h2>{itemDetail.name}</h2>
            <h3>{itemDetail.description}</h3>
            


        </div>
    )

}

export default ShopItemPopup