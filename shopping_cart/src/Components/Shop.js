import {React, Component } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

class Shop extends Component {
    constructor(){
        super()

        this.state = {
            items: []
        }
    }

    //when the page loads, immediately fetch the data
    componentDidMount(){
        this.fetchItems()
    }

    fetchItems = async () => {
        const data = await fetch('https://ffxivcollect.com/api/minions?id_in=80..110')
        const items = await data.json();
        console.log(items.results)
        this.setState({
            items: items.results
        })
    }

    render(){
        return (
            <div>
            <Cart/>
                <h1>Shop</h1>
                <div className="shop-div">
                    {this.state.items.map(item => (
                        <div key={item.id}>
                            <h2>
                                <Link to={`/shop/${item.id}`} className="minion-links">
                                    <img src={item.image} alt={item.name + ' minion'} className="shop-img" />
                                    <br></br>
                                    {item.name}
                                </Link>
                            </h2>
    
                            {/*I'm  using the patch as the price points, since they are not
                            included in the API if they are MogStation items. I check if the patch
                            length is smaller than 4 characters to know if I just append a 0 to the end
                            to make it appear as if it is just a dollar value, for example...
                            an item is from patch 3.1, I will add a 0 to make it $3.10 */}
    
                            {item.patch.length < 4 &&
                                <div>
                                    <h4>${item.patch}0</h4>
                                </div>
                            }
    
                            {item.patch.length > 3 &&
                                <div>
                                    <h4>${item.patch}</h4>
                                    
                                </div>
                            }
    
                        </div>
                    ))}
    
    
                </div>
            </div>
        )
    }

    
}

export default Shop