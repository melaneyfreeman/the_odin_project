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
      isEditingEd1: false,
      isEditingEd2: false,
      educationCount: 1
    };
  
  }
  
  onGeneralEdit(){
    this.setState({
      isEditingGen: !this.state.isEditingGen
    });
    console.log("gen edit: " + this.state.isEditingGen)
  }

  onEducationEdit(i){
    if(i < 2){
      this.setState({
        isEditingEd1: !this.state.isEditingEd1
      })
    }
    else{
      this.setState({
        isEditingEd2: !this.state.isEditingEd2
      })
    }
  }
   

  onEducationAdd(){
    this.setState({
      educationCount: 2
    })
  }

  
  render(){ 
    let general = "";
    let education1 = "";
    let education2 = "";

    //-----------GENERAL
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

    //-----------EDUCATION
    //editing education information handling
    //if editing education
    if(this.state.isEditingEd1){
      education1 = (
        <div className="education">
          <Education isEditing={true} />
          <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>submit</button>

        </div>
      )
    }

    else{
      education1 = (
        <div className="education">
          <Education isEditing={false} />
          <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>edit education</button>
          <button onClick={this.onEducationAdd.bind(this)}>add secondary education</button>
        </div>
      )
    }

    

    if(this.state.isEditingEd2){
      education2 = (
        <div className="education">
          <Education isEditing={true}/>
          <button key={2} onClick={this.onEducationEdit.bind(this, 2)}>submit</button>
        </div>
      )
    }

    else{
      education2 = (
        <div className="education">
          <Education isEditing={false}/>
          <button key={2} onClick={this.onEducationEdit.bind(this, 2)}>edit education</button>
        </div>
      )
    }

    //check if there is a secondary education
    if(this.state.educationCount > 1){
      return(
        <div className="App">
          {general}
          {education1}
          {education2}

        </div>
      )
    }
    
    //if there is not a secondary education
    return(
      <div className="App">
        {general}
        {education1}
      </div>
    )
  }

}

export default App;
