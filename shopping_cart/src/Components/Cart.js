import React from 'react'

class Cart extends React.Component{
    


    render(){
        return(
            <div className="cart">
                <h3>Cart</h3>
                <h4>{this.props.currentItem}</h4>
            </div>
        )
    }
        
    
    
}

export default Cart