import React, {useState, useEffect} from 'react'

function ShopItem({match}){
    useEffect(() => {
        fetchItem();
    }, [])

    const [itemDetail, setItemDetail] = useState({
        results: {
            name:{

            }
        }
    })

    
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://ffxivcollect.com/api/minions?id_in=${match.params.id}`)
        const itemDetail = await fetchItem.json()
        setItemDetail(itemDetail.results[0])
        console.log(itemDetail.results[0])
    }
    
    return(
        <div>
            <h1>{itemDetail.name}</h1>
        </div>
    )
}

export default ShopItem