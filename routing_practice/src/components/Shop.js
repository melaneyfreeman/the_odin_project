import React, {useState, useEffect} from 'react'

function Shop(){

    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')
        const items = await data.json();
        console.log(items.data)
        setItems(items.data)
    }

  


    return(
        <div>
            <h1>Shop</h1>
            {items.map(item => (
                <h2>{item.item.name}</h2>
            ))}
        </div>
    )
}

export default Shop