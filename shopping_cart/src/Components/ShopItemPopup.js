
import { React, Component, useContext, useEffect, useState, useRef } from 'react'
import Item from './Item'
import { ItemContext } from '../ItemContext'
import { CartContext } from '../CartContext'



const ShopItemPopup = (props) => {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetchItem()
    })

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
        setLoading(false)
    
    }


    if(isLoading){
       return(
        <h2>loading...</h2>
       )
    }

    //check if itemDetail is defined before trying to use it in the component
    else if (itemDetail !== undefined) {
        return (
            <div>
                <h2>{props.id}</h2>
                <h2>{itemDetail.name}</h2>
                <h2>{itemDetail.description + " " + itemDetail.enhanced_description}</h2>
                

            </div>
        )

    }

    else {
        return (
            <div>{console.log("popup item is: " + itemDetail)}</div>
        )
    }


}

export default ShopItemPopup