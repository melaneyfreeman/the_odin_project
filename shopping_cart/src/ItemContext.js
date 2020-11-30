import { React, createContext, useEffect, useState } from 'react'

export const ItemContext = createContext()

export const ItemProvider = (props, match) => {
    //when the page loads, immediately fetch the data
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const fetchItem = await fetch(`https://ffxivcollect.com/api/minions?id_in=80..110`)
        const items = await fetchItem.json()
        setItems(items.results)
        console.log(items.results)
    }




    return (
        <ItemContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemContext.Provider>
    )
}