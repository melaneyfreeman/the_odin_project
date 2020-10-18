import React from 'react';

class Experience extends React.Component{
    constructor(props){
        super();

        this.state = {
            isEditing: props.isEditing,
            company: "Hien Inc",
            startDate: "01/01/1999",
            endDate: "01/01/2020",
            position: "Retainer",
            tasks: "Saving Eorzea as a Scion by participating in meetings with regional leaders while also protecting Lord Hien"
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
                    <div className="labelInputs">
                        <label className="companyLabel">company</label>
                        <label className="dateLabel">start date</label>
                        <label className="dateLabel">end date</label>
                    </div>

                    <div className="labelInputs">
                        <input  className="company form-control" 
                            name="company"
                            type="text"
                            value={this.state.company}
                            onChange={this.handleInputChange}>
                        </input> 

                        <input  className="startDate form-control" 
                            name="startDate"
                            type="date"
                            value={this.state.startDate}
                            onChange={this.handleInputChange}>
                        </input>

                        <input  className="endDate form-control" 
                            name="endDate"
                            type="date"
                            value={this.state.endDate}
                            onChange={this.handleInputChange}>
                        </input>
                    </div>

                <label className="singleLineLabel">position</label>

                <div className="labelInputs"> 
                    <input  className="position form-control singleLineInput" 
                        name="position"
                        type="text"
                        value={this.state.position}
                        onChange={this.handleInputChange}>
                    </input> 
                </div>

                <label className="singleLineLabel">tasks</label>

                <div className="labelInputs">
                    <input  className="tasks form-control singleLineInput" 
                        name="tasks"
                        type="text"
                        value={this.state.tasks}
                        onChange={this.handleInputChange}>
                    </input>
                </div>
            </div>
            )
        }

        else{
            return(
                <div>
                    <h3>Employer</h3>
                    <p>{this.state.company}</p>
                    <h4>Start and End dates</h4>
                    <h6>{this.state.startDate + " through " + this.state.endDate}</h6>
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