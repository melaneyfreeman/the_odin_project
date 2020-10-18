import React from 'react';

class Education extends React.Component{
    constructor(props){
        super();

        this.state = {
            isEditing: props.isEditing,
            school: "University of Eorzea",
            degree: "Bachelors of Combat",
            minor: "minor study",
            graduationYear: "2020"
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
                <div className="form-group">
                    <label className="singleLineLabel">school</label>
                    
                    <div className="labelInputs">
                        <input className="school form-control singleLineInput" 
                            name="school"
                            type="text"
                            value={this.state.school}
                            onChange={this.handleInputChange}>
                        </input> 
                    </div>

                    <div className="labelInputs">
                        <label>degree</label>
                        <label className="degreeDateLabel">date</label>
                    </div>

                    <div className="labelInputs">
                        <input className="degree form-control" 
                            name="degree"
                            type="text"
                            value={this.state.degree}
                            onChange={this.handleInputChange}>   
                        </input>

                        <input className="graduationYear form-control" 
                            name="graduationYear"
                            type="number"
                            max="3000"
                            value={this.state.graduationYear}
                            onChange={this.handleInputChange}>
                        </input>
                    </div>
                </div>
            )
        }

        else{
            return(
                <div>
                    <h3>School</h3>
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

export default Education;