import React from 'react';

class Experience extends React.Component{
    constructor(props){
        super();

        this.state = {
            isEditing: props.isEditing,
            company: "company",
            startDate: "01/01/1999",
            endDate: "01/01/2020",
            position: "developer",
            tasks: "example tasks doing these duties"
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
                <label>company:</label>
                <input  className="company" 
                        name="company"
                        type="text"
                        value={this.state.company}
                        onChange={this.handleInputChange}>
                </input> 

                <br></br>
                <br></br>

                <label>start date:</label>
                <input  className="startDate" 
                        name="startDate"
                        type="date"
                        value={this.state.startDate}
                        onChange={this.handleInputChange}>
                </input>

                <label>end date:</label>
                <input  className="endDate" 
                        name="endDate"
                        type="date"
                        value={this.state.endDate}
                        onChange={this.handleInputChange}>
                </input>

                <br></br>
                <br></br>

                <label>position:</label>
                <input  className="position" 
                        name="position"
                        type="text"
                        value={this.state.position}
                        onChange={this.handleInputChange}></input> 

                <label>tasks:</label>
                <input  className="tasks" 
                        name="tasks"
                        type="text"
                        value={this.state.tasks}
                        onChange={this.handleInputChange}></input>
                <br></br>
                <br></br>

                </div>
            )
        }
        else{
                return(
                    <div>
                        <h2>Experience</h2>
                        <p>{this.state.company}</p>
                        <h3>State and End dates</h3>
                        <p>{this.state.startDate + " through " + this.state.endDate}</p>
                        <h3>Position</h3>
                        <p>{this.state.position}</p>
                        <h3>Tasks</h3>
                        <p>{this.state.tasks}</p>
                    </div>                
                )
            

    
        }

     

       
    }
}

export default Experience;