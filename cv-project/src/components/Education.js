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
                <div className="form-group">
                    <label>school</label>
                    <br></br>
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
                        <label>date</label>
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
                        <h2>Education</h2>
                        <p>{this.state.school}</p>
                        <h5>Area of Study</h5>
                        <p>{this.state.degree}</p>
                        <h5>Graduation</h5>
                        <p>{this.state.graduationYear}</p>
                    </div>                
                )
            
        }

     

       
    }
}

export default Education;