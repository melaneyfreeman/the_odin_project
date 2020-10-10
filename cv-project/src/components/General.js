import React from 'react';

class General extends React.Component{
    constructor(props){
        super();

        this.state = {
            isEditing: props.isEditing,
            firstName: "name"
        }
    }

    onHandleChange(event){
        this.setState({
            firstName: event.target.value
        });
    }

    render(){
        //using this.props is important
        //refers to the prop passed into general
        //which is needed for app.js to display
        //elements properly, whether editing or not
        if(this.props.isEditing){
            return(
                <div>
                <label>first name:</label>
                <input className="firstName" type="text"
                defaultValue={this.state.firstName}
                onChange={(event) => this.onHandleChange(event)}></input> 

                <label>last name:</label>
                <input className="lastName" type="text"></input>

                <br></br>
                <label>email:</label>
                <input className="email" type="email"></input> 

                <label>phone number:</label>
                <input className="phoneNumber" type="phone"></input>

                <br></br>

                </div>
            )
        }
        else{
            return(
                <div>
                <h1>{this.state.firstName}</h1>
                <h3>Email</h3>
                <p>email@email.com</p>
                <h3>Phone Number</h3>
                <p>222-222-2222</p>
            </div>
            )
        }
    }
}

export default General;