import React, { Component } from 'react';
import './App.css';
import './components/General';
import General from './components/General';
import Education from './components/Education'
import Experience from './components/Experience'

class App extends Component {
  constructor(){
    super();

    this.state = {
      isEditingGen: false,
      isEditingEd1: false,
      isEditingEd2: false,
      educationCount: 1,
      isEditingExp1: false
    };
  
  }
  
  onGeneralEdit(){
    this.setState({
      isEditingGen: !this.state.isEditingGen
    });
    console.log("gen edit: " + this.state.isEditingGen)
  }

  onEducationEdit(i){
    //if the id of the button pressed is 1
    //we will edit education 1
    if(i === 1){
      this.setState({
        isEditingEd1: !this.state.isEditingEd1
      })
      console.log("editing 1")
    }
    //else the id must be 2
    //so we edit education 2
    else{
      this.setState({
        isEditingEd2: !this.state.isEditingEd2
      })
      console.log("editing 2")

    }
  }

  onExperienceEdit(i){
    if(i === 3){
      this.setState({
        isEditingExp1: !this.state.isEditingExp1
      })
      console.log("editing exp1")
    }
  }
   

  onEducationAdd(){
    this.setState({
      educationCount: 2
    })
  }

  onEducationRemove(){
    this.setState({
      educationCount: 1
    })
  }

  
  render(){ 
    let general = "";
    let education1 = "";
    let education2 = "";
    let experience1 = "";

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
    //if editing education 1
    if(this.state.isEditingEd1){
      //if there is only 1 education
      //add secondary education button is available
      //while editiing education 1
      if(this.state.educationCount < 2){
        education1 = (
          <div className="education">
            <Education isEditing={true} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>submit</button>
            <button onClick={this.onEducationAdd.bind(this)}>add secondary education</button>
          </div>
        )
      }

      //else, there are 2 educations
      //remove the add secondary education button
      //while editing education 1
      else{
        education1 = (
          <div className="education">
            <Education isEditing={true} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>submit</button>
          </div>
        )
      }
      
    }

    //if not editing edication 1
    else{
      //if there is only 1 education
      //add secondary education button is available
      //while not editing education 1
      if(this.state.educationCount < 2){
        education1 = (
          <div className="education">
            <Education isEditing={false} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>edit education</button>
            <button onClick={this.onEducationAdd.bind(this)}>add secondary education</button>
          </div>
        )
      }
      else{
        //else there is 2 educations
        //remove the add secondary education button
        //while not editing education 1
        education1 = (
          <div className="education">
            <Education isEditing={false} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>edit education</button>
          </div>
        )
      }
      
    }

    //editing education 2
    if(this.state.isEditingEd2){
      education2 = (
        <div className="education">
          <Education isEditing={true}/>
          <button key={2} onClick={this.onEducationEdit.bind(this, 2)}>submit</button>
          <button onClick={this.onEducationRemove.bind(this)}>remove secondary education</button>

        </div>
      )
    }
    //not editing education 2
    else{
      education2 = (
        <div className="education">
          <Education isEditing={false}/>
          <button key={2} onClick={this.onEducationEdit.bind(this, 2)}>edit education</button>
          <button onClick={this.onEducationRemove.bind(this)}>remove secondary education</button>
        </div>
      )
    }

    //-----------EXPERIENCE
    if(this.state.isEditingExp1){
      experience1 = (
        <div className="experience">
          <Experience isEditing={true}/>
          <button key={3} onClick={this.onExperienceEdit.bind(this, 3)}>submit</button>
        </div>
      )
    }
    else{
      experience1 = (
        <div className="experience">
          <Experience isEditing={false}/>
          <button key={3} onClick={this.onExperienceEdit.bind(this, 3)}>edit experience</button>
        </div>
      )
    }
  
    //check if there is a secondary education
    //return secondary education
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
    //do not return a second education
    return(
      
      <div className="App">
        {general}
        {education1}
        {experience1}
      </div>
    )
  }

}

export default App;
