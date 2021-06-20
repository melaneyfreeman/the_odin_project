
import { React, Component, useContext, useEffect, useState } from 'react'
import Item from './Item'
import {ItemContext} from '../ItemContext'
import {CartContext} from '../CartContext'


function ShopItemPopup ({match}) {
    useEffect(() => {
        fetchItem()
    }, [])
    
    const [itemDetail, setItemDetail] = useState({
        results:{
            name:{

            }
        
        },
        verminion:{}
    })

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://ffxivcollect.com/api/minions?id_in=${match.params.id}`)
        const itemDetail = await fetchItem.json()
        setItemDetail(itemDetail.results[0])
        console.log(itemDetail.results[0])
    }

    const [cartItems, setCartItems] = useContext(CartContext)

        return (
            <div className="shop_item_popup">
                <div className="shop-item">
                    <Item name={itemDetail.name}
                        description={itemDetail.description}
                        enhanced_description={itemDetail.enhanced_description}
                        imageSrc={itemDetail.image}
                        imageAlt={itemDetail.name}
                        tooltip={itemDetail.tooltip}
                        price={itemDetail.verminion.speed + "." + itemDetail.verminion.attack}                 
                    />           
                </div>
            </div>
        )
    
}

export default ShopItemPopup