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
      isEditingExp1: false,
      isEditingExp2: false,
      experienceCount: 1
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
      console.log("editing ed1")
    }
    //else the id must be 2
    //so we edit education 2
    else{
      this.setState({
        isEditingEd2: !this.state.isEditingEd2
      })
      console.log("editing ed2")

    }
  }

  onExperienceEdit(i){
    if(i === 3){
      this.setState({
        isEditingExp1: !this.state.isEditingExp1
      })
      console.log("editing exp1")
    }
    else{
      this.setState({
        isEditingExp2: !this.state.isEditingExp2
      })
      console.log("editing exp2")
    }
  }
   

  onEducationAdd(){
    //set isEditing2 to true so it automatically
    //allows you to edit the secondary education
    //when you add it, removing an extra button click
    //for the user
    this.setState({
      educationCount: 2,
      isEditingEd2: true
    })
  }

  onEducationRemove(){
    this.setState({
      educationCount: 1,
      isEditingEd2: true
    })
    
  }

  onExperienceAdd(){
    this.setState({
      experienceCount: 2,
      isEditingExp2: true
    })
  }

  onExperienceRemove(){
    this.setState({
      experienceCount: 1,
      isEditingExp2: true
    })
  }

  
  render(){ 
    let general = "";
    let education1 = "";
    let education2 = "";
    let experience1 = "";
    let experience2 = "";

    ////////////////////
    //-----------GENERAL
    ////////////////////
    //editing general information handling
    //if editing general
    if(this.state.isEditingGen){
      general = (
        <div className="general editing">
          <General isEditing={true}/>
          <button onClick={this.onGeneralEdit.bind(this)} className="btn btn-primary">submit</button>
        </div>
      );
    }

    //if not editing general
    else{
      general = (
        <div className="general">
          <button onClick={this.onGeneralEdit.bind(this)} className="btn btn-light edit">edit</button>
          <General isEditing={false}/>

      </div>
      );
    }

    ///////////////////////
    //-----------EDUCATION
    ///////////////////////
    
    /////EDITING EDUCATION 1
    //if there is only 1 education
    //add secondary education button is available
    //while editing education 1
    if(this.state.isEditingEd1){
      if(this.state.educationCount === 1){
        education1 = (
          <div className="education1 editing">
            <Education isEditing={true} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)} className="btn btn-primary">submit</button>
            <button onClick={this.onEducationAdd.bind(this)} className="btn btn-success">+</button>
          </div>
        )
      }

      //else, there are 2 educations
      //remove the add secondary education button
      //while editing education 1
      else{
        education1 = (
          <div className="education1 editing">
            <Education isEditing={true} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)} className="btn btn-primary">submit</button>
          </div>
        )
      }
    }

    /////NOT EDITING EDUCATION 1
    //if there is only 1 education
    //add secondary education button is available
    //while not editing education 1
    else{
      
      if(this.state.educationCount === 1){
        education1 = (
          <div className="education1">
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)} className="btn btn-light edit">edit</button>
            <Education isEditing={false} />
            <button onClick={this.onEducationAdd.bind(this)} className="btn btn-success">+</button>
          </div>
        )
      }

      //else there is 2 educations
      //remove the add secondary education button
      //while not editing education 1
      else{
        education1 = (
          <div className="education1">
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)} className="btn btn-light edit">edit</button>
            <Education isEditing={false} />
          </div>
        )
      }
    }

    /////EDITING EDUCATION 2
    if(this.state.isEditingEd2){
      education2 = (
        <div className="education2 editing">
          <Education isEditing={true}/>
          <button key={2} onClick={this.onEducationEdit.bind(this, 2)} className="btn btn-primary">submit</button>
          <button onClick={this.onEducationRemove.bind(this)} className="btn btn-danger">x</button>

        </div>
      )
    }
    /////NOT EDITING EDUCATION 2
    else{
      education2 = (
        <div className="education2">
          <button key={2} onClick={this.onEducationEdit.bind(this, 2)} className="btn btn-light edit">edit</button>
          <Education isEditing={false}/>
          <button onClick={this.onEducationRemove.bind(this)} className="btn btn-danger">x</button>
        </div>
      )
    }

    ///////////////////////
    //-----------EXPERIENCE
    ///////////////////////

    /////EDITING EXPERIENCE 1

    if(this.state.isEditingExp1){
      //if there is only 1 exp
      //add second exp btn is available
      if(this.state.experienceCount === 1){
        experience1 = (
          <div className="experience1 editing">
            <Experience isEditing={true}/>
            <button key={3} onClick={this.onExperienceEdit.bind(this, 3)} className="btn btn-primary">submit</button>
            <button onClick={this.onExperienceAdd.bind(this)} className="btn btn-success">+</button>
          </div>
        )
      }

      //if there are 2 exp
      //add second exp btn is not available
      else{
        experience1 = (
          <div className="experience1 editing">
            <Experience isEditing={true}/>
            <button key={3} onClick={this.onExperienceEdit.bind(this, 3)} className="btn btn-primary">submit</button>
          </div>
        )
      }
 
    }

    /////NOT EDITING EXPERIENCE 1
    //if there is only 1 education
    //add secondary exp button is available
    else{
      if(this.state.experienceCount === 1){
        experience1 = (
          <div className="experience1">
            <button key={3} onClick={this.onExperienceEdit.bind(this, 3)} className="btn btn-light edit">edit</button>
            <Experience isEditing={false}/>
            <button onClick={this.onExperienceAdd.bind(this)} className="btn btn-success">+</button>
          </div>
        )
      }

      //there are 2 exp
      //second exp button is not available
      else{
        experience1 = (
          <div className="experience1">
            <button key={3} onClick={this.onExperienceEdit.bind(this, 3)} className="btn btn-light edit">edit</button>
            <Experience isEditing={false}/>
          </div>
        )
      }
   
    }

    /////EDITING EXPERIENCE 2
    if(this.state.isEditingExp2){
      experience2 = (
        <div className="experience2 editing">
          <Experience isEditing={true}/>
          <button key={4} onClick={this.onExperienceEdit.bind(this, 4)} className="btn btn-primary">submit</button>
          <button onClick={this.onExperienceRemove.bind(this)} className="btn btn-danger">x</button>
        </div>
      )
    }

    ///// NOT EDITING EXPERIENCE 2
    else{
      experience2 = (
        <div className="experience2">
            <button key={4} onClick={this.onExperienceEdit.bind(this, 4)} className="btn btn-light edit">edit</button>
            <Experience isEditing={false}/>
            <button onClick={this.onExperienceRemove.bind(this)} className="btn btn-danger">x</button>
        </div>
      )
    }

    if(this.state.educationCount === 1){
      education2 = "";
    }
    if(this.state.experienceCount === 1){
      experience2 = "";
    }
  
  
    return(
      <div className="App">
        {general}

        <h2>Education</h2>
        <div className="educations">
          {education1}
          {education2}
        </div>

        <h2>Experience</h2>
        <div className="experiences">
          {experience1}
          {experience2}
        </div>

      </div>
    )
  }


}

export default App;
