import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ItemContext } from '../ItemContext'
import { CartContext } from '../CartContext'
import Item from './Item'
import ShopItemPopup from './ShopItemPopup'


function Shop() {
    //creating a state for isPopup
    //to create a re-render for when the popup needs to be closed/opened
    const [isPopup, setIsPopup] = useState(false)
    const [items, setItems] = useContext(ItemContext)
    const [cartItems, setCartItems] = useContext(CartContext)
    const [popupItem, setPopupItem] = useState(0)

    const defaultPopup = 0


    //check for duplicates in the cart array, before updating cartItems
    function removeDupes(arr) {
        //v = value, i = index, a = array
        if (arr.length > 1) {
            arr = arr.slice().reverse().filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i).reverse()
            return arr;

        }
    }

    function updateCart(itemDetail) {
        //if there is anything in the cart, check for dupes
        if (cartItems.length > 0) {
            let newArr = cartItems
            newArr.push(itemDetail)
            newArr = removeDupes(newArr)
            //setCartItems(prevItems => [...prevItems, itemDetail])
            setCartItems(newArr)
            console.log(itemDetail.name)
            console.log("removed dupes:")
            console.log(cartItems)
        }
        //if cart is empty, no need to check for dupes
        else {
            setCartItems(prevItems => [...prevItems, itemDetail])
            console.log(itemDetail.name)
        }
    }

    function showPopup(item) {
        setIsPopup(!isPopup)
        console.log("mouse in " + item)
        console.log(isPopup)
        //create a new variable for the item value passed to this function
        //so we can send that same value off to setPopupItem()
        let popupItem = item;
        setPopupItem(popupItem)
        document.getElementById("popup").style.display = "block"



    }

    function hidePopup(item) {
        document.getElementById("popup").style.display = "none"
        console.log("mouse out " + item)
        console.log("hiding popupitem: " + popupItem + defaultPopup)

    }

        return (
            <div className="parent">

                <h1>Shop</h1>
                <div className="popup" id="popup">
                    <ShopItemPopup id={popupItem} />
                    {console.log("this is the item being sent: " + popupItem)}
                </div>

                <div className="shop-div">
                    {items.map(item => (
                        <div key={item.id}>

                            <h2>
                                <Link to={`/shop/${item.id}`} className="minion-links">
                                    <Item name={item.name}
                                        imageSrc={item.image}
                                        imageAlt={item.name}
                                        price={item.verminion.speed + "." + item.verminion.attack} />
                                </Link>
                            </h2>
                            <div className="buttonDiv">
                                <button id={item.id} onMouseOver={e => showPopup(item.id)} onMouseOut={e => hidePopup(item.id)}>quick view</button>
                                <button id={item.name} onClick={e => updateCart(item)}>add</button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        )
    }


export default Shop
