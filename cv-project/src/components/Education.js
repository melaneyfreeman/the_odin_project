import React from 'react';

class Education extends React.Component{
    constructor(props){
        super();

        this.state = {
            isEditing: props.isEditing,
            school: "school",
            degree: "bachelors of school",
            minor: "minor study",
            graduationYear: "2019"
        }
    }

    handleInputChange = ({
        target: {name, value}}) => {
        this.setState({
            [name]: value
        });
    }

    render(){
        if(this.props.isEditing){
            return(
                <div>
                <label>school:</label>
                <input  className="school" 
                        name="school"
                        type="text"
                        value={this.state.school}
                        onChange={this.handleInputChange}>
                </input> 

                <label>degree:</label>
                <input  className="degree" 
                        name="degree"
                        type="text"
                        value={this.state.degree}
                        onChange={this.handleInputChange}></input>

                <br></br>
                <br></br>

                <label>(optional) minor:</label>
                <input  className="minor" 
                        name="minor"
                        type="text"
                        value={this.state.minor}
                        onChange={this.handleInputChange}></input> 

                <label>graduation year:</label>
                <input  className="graduationYear" 
                        name="graduationYear"
                        type="number"
                        max="3000"
                        value={this.state.graduationYear}
                        onChange={this.handleInputChange}></input>
                <br></br>
                <br></br>

                </div>
            )
        }
        else{
            if(this.state.minor) {
                return(
                    <div>
                        <h2>Education</h2>
                        <p>{this.state.school}</p>
                        <h3>Area of Study</h3>
                        <p>{this.state.degree}</p>
                        <h3>Minor</h3>
                        <p>{this.state.minor}</p>
                        <h3>Graduation</h3>
                        <p>{this.state.graduationYear}</p>
                    </div>                
                )
            }

            else{
            return(
                    <div>
                        <h2>Education</h2>
                        <p>{this.state.school}</p>
                        <h3>Area of Study</h3>
                        <p>{this.state.degree}</p>
                        <h3>Graduation</h3>
                        <p>{this.state.graduationYear}</p>
                    </div>                
                )
            }
        }

     

       
    }
}

export default Education;