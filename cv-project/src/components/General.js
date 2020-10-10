import React from 'react';

class General extends React.Component{
    constructor(props){
        super();

        this.state = {
            isEditing: props.isEditing,
            firstName: "first name",
            lastName: "last name",
            email: "email@email.com",
            phone: "222-222-2222"
        }
    }

    

    handleInputChange = ({
        target: {name, value}}) => {
        this.setState({
            [name]: value
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
                <input  className="firstName" 
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}>
                </input> 

                <label>last name:</label>
                <input  className="lastName" 
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}></input>

                <br></br>
                <br></br>

                <label>email:</label>
                <input  className="email" 
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}></input> 

                <label>phone number:</label>
                <input  className="phoneNumber" 
                        name="phone"
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={this.state.phone}
                        onChange={this.handleInputChange}></input>
                <br></br>
                <br></br>

                </div>
            )
        }
        else{
            return(
                <div>
                    <h1 className="firstLast">{this.state.firstName + " "}</h1>
                    <h1 className="firstLast">{this.state.lastName}</h1>
                    <p>{this.state.email}</p>
                    <p>{this.state.phone}</p>
                </div>
            )
        }
    }
}

export default General;