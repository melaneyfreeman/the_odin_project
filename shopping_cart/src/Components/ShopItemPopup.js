
import { React, Component, useContext, useEffect, useState, useRef } from 'react'
import Item from './Item'
import { ItemContext } from '../ItemContext'
import { CartContext } from '../CartContext'



const ShopItemPopup = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [itemDetail, setItemDetail] = useState({
        results: {
            name: {

            }

        },
        verminion: {}
    })

    useEffect(() => {

        const fetchItem = async () => {

            try {
                const fetchItem = await fetch(`https://ffxivcollect.com/api/minions?id_in=${props.id}`)

                if (isLoading) {
                    const itemDetail = await fetchItem.json()
                    setItemDetail(itemDetail.results[0])
                    if (itemDetail !== undefined) {
                        setLoading(false)

                    }
                }


            }
            catch {
                setLoading(true)
            }


        }

    

        fetchItem()

    }, [])


    return (

        <div>
            {isLoading ? (
                <h2>loading...</h2>
            ) : (
                    <div>
                        <h2>{props.id}</h2>
                        <h2>{itemDetail.name}</h2>
                        <h2>{itemDetail.description + " " + itemDetail.enhanced_description}</h2>
                    </div>
                )}
        </div>

    )
}


export default ShopItemPopup