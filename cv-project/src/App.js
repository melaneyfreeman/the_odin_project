import React, { Component } from 'react';
import './App.css';
import './components/General';
import General from './components/General';
import Education from './components/Education'

class App extends Component {
  constructor(){
    super();

    this.state = {
      isEditingGen: false,
      isEditingEd: false,
      educationCount: 1
    };
  
  }
  
  onGeneralEdit(){
    this.setState({
      isEditingGen: !this.state.isEditingGen
    });
    console.log("gen edit: " + this.state.isEditingGen)
  }

  onEducationEdit(){
    this.setState({
      isEditingEd: !this.state.isEditingEd
    });
    console.log("ed edit: " + this.state.isEditingEd)
  }

  onEducationAdd(){
    this.setState({
      educationCount: this.state.educationCount + 1
    })
  }

  
  render(){ 
    let general = "";
    let education = "";
    let educations = [];

    //editing general information handling
    //if editing general
    if(this.state.isEditingGen){
      general = (
        <div>
          <General isEditing={true}/>
          <button onClick={this.onGeneralEdit.bind(this)}>submit</button>
        </div>
      );
    }

    //if not editing general
    else{
      general = (
        <div>
          <General isEditing={false}/>
          <button onClick={this.onGeneralEdit.bind(this)}>edit general</button>

      </div>
      );
    }

    //editing education information handling
    //if editing education
    if(this.state.isEditingEd){
      education = (
        <div>
          <Education isEditing={true}/>
          <button onClick={this.onEducationEdit.bind(this)}>submit</button>

        </div>
      )
    }

    else{
      education = (
        <div>
          <Education isEditing={false}/>
          <button onClick={this.onEducationEdit.bind(this)}>edit education</button>
        </div>
      )
    }

    
    return(
      <div className="App">
        {general}
       
        {education}
      </div>
    )
 
  }
}

export default App;
