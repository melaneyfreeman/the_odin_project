import React from 'react';

class General extends React.Component{
    constructor(props){
        super();

        this.state = {
            isEditing: props.isEditing,
            firstName: "Yugiri",
            lastName: "Mistwalker",
            email: "hiensretainer@stormblood.com",
            phone: "208-555-1234"
        }
    }

    handleInputChange = ({
        target: {name, value}}) => {
        this.setState({
            [name]: value
        });
        console.log(this.state.firstName)
    }

    render(){
        //using this.props is important
        //refers to the prop passed into general
        //which is needed for app.js to display
        //elements properly, whether editing or not
        if(this.props.isEditing){
            return(
                <div className="form-group">
                    {/*below is the div for the labels on row 1*/}
                    <div className="labelInputs">
                        <label className="generalLabels">first name</label>
                        <label className="generalLabels">last name</label>
                    </div>  

                    {/*seperating the labels/inputs into divs so that the labels for each
                    input can be directly above the input for each row*/}
                    {/*below is the div for the inputs on row 2*/}  
                    
                    <div className="labelInputs">
                        <input className="firstName form-control generalInput" 
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            placeholder="first name"
                            onChange={this.handleInputChange}>
                        </input> 

                        <input className="lastName form-control generalInput" 
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            placeholder="last name"
                            onChange={this.handleInputChange}>
                        </input>
                    </div>
                
                    {/*below is the div for the labels on row 3*/}
                    <div className="labelInputs">
                        <label className="generalLabels">email</label>
                        <label className="generalLabels">phone number</label>
                    </div>

                    {/*below is the div for the inputs on row 4*/}
                    <div className="form-group labelInputs">
                        <input  className="email form-control generalInput" 
                            name="email"
                            type="email"
                            value={this.state.email}
                            placeholder="email address"
                            onChange={this.handleInputChange}>
                        </input> 

                        <input  className="phoneNumber form-control generalInput" 
                            name="phone"
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={this.state.phone}
                            placeholder="telephone number"
                            onChange={this.handleInputChange}>
                        </input>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1 className="firstLast">{this.state.firstName + " " + this.state.lastName}</h1>
                    <p>{this.state.email}</p>
                    <p>{this.state.phone}</p>
                </div>
            )
        }
    }
}

export default General;