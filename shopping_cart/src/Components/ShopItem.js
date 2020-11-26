
import {React, Component } from 'react'
import Cart from './Cart'


class ShopItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: {
                name:{

                }
            },
            itemId: props.match.params.itemId,
            itemDetail: ""
        }
    }

    //when the page loads, immediately fetch the data
    componentDidMount(){
        this.fetchItem()
    }


    fetchItem = async () => {
        const fetchItem = await fetch(`https://ffxivcollect.com/api/minions?id_in=${this.state.itemId}`)
        const itemDetail = await fetchItem.json()
        this.setState({
            itemDetail: itemDetail.results[0]
        })
        console.log(itemDetail.results[0])
    }

    addToCart(id) {
        console.log("button clicked" + id)
       
    }

    render() {
        return (
            <div>
                <div className="shop-item">
                    <h1>{this.state.itemDetail.name}</h1>
                    <h2>{this.state.itemDetail.description}</h2>
                    <h2>{this.state.itemDetail.enhanced_description}</h2>
                    <img src={this.state.itemDetail.image} alt={this.state.itemDetail.name}></img>
                    <h5>{this.state.itemDetail.tooltip}</h5>
                    <h4>Price: {this.state.itemDetail.patch}</h4>
                    <button id={this.state.itemDetail.id} onClick={e => this.addToCart(e.target.id)}>add to cart</button>
                </div>
            </div>
        )
    }
}

export default ShopItem