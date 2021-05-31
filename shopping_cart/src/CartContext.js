import { React, createContext, useEffect, useState, useContext } from 'react'
import {ItemContext} from './ItemContext'

export const CartContext = createContext()

export const CartProvider = (props) => {

    const [items, setItems] = useContext(ItemContext)

    const [cartItems, setCartItems] = useState([
        
    ])

    console.log("cart items from cart context")
    console.log(cartItems)

    //one way of checking for duplicates
/*     function checkDouble(){
        var arr = cartItems
        for (let i = 0; i < arr.length; i++){
            for(let x = 0; x < arr.length; x++){
                if(arr[i] === arr[x] && i !== x){
                    console.log("SAME ONES IN ARRAY!!!!!!!!!" + arr[i])
                }
                else
                    console.log("no duplicates whoo")
            }
        }
    }

    checkDouble() */

    //other way?
        function getUnique(arr, index){
            const unique = arr
                .map(e=> e[index])

                //store the keys of the unique objects
                .map((e, i, final) => final.indexOf(e) === i && i)

                //eliminate the dead keys & store unique objects
                .filter(e => arr[e]).map(e => arr[e]);

                return unique
        }
        

        console.log(getUnique(cartItems, 'id') + "should be no doubles????")

        //this causes too many rerenders?
        //setCartItems(getUnique(cartItems, 'id'))

        



    return (
        <CartContext.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </CartContext.Provider>
    )
}