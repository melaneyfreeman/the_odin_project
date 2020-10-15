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
          <button onClick={this.onGeneralEdit.bind(this)}>submit</button>
        </div>
      );
    }

    //if not editing general
    else{
      general = (
        <div className="general">
          <General isEditing={false}/>
          <button onClick={this.onGeneralEdit.bind(this)}>edit general</button>

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
          <div className="education1">
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
          <div className="education1">
            <Education isEditing={true} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>submit</button>
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
            <Education isEditing={false} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>edit education</button>
            <button onClick={this.onEducationAdd.bind(this)}>add secondary education</button>
          </div>
        )
      }

      //else there is 2 educations
      //remove the add secondary education button
      //while not editing education 1
      else{
        education1 = (
          <div className="education1">
            <Education isEditing={false} />
            <button key={1} onClick={this.onEducationEdit.bind(this, 1)}>edit education</button>
          </div>
        )
      }
    }

    /////EDITING EDUCATION 2
    if(this.state.isEditingEd2){
      education2 = (
        <div className="education2">
          <Education isEditing={true}/>
          <button key={2} onClick={this.onEducationEdit.bind(this, 2)}>submit</button>
          <button onClick={this.onEducationRemove.bind(this)}>remove secondary education</button>

        </div>
      )
    }
    /////NOT EDITING EDUCATION 2
    else{
      education2 = (
        <div className="education2">
          <Education isEditing={false}/>
          <button key={2} onClick={this.onEducationEdit.bind(this, 2)}>edit education</button>
          <button onClick={this.onEducationRemove.bind(this)}>remove secondary education</button>
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
          <div className="experience1">
            <Experience isEditing={true}/>
            <button key={3} onClick={this.onExperienceEdit.bind(this, 3)}>submit</button>
            <button onClick={this.onExperienceAdd.bind(this)}>add secondary experience</button>
          </div>
        )
      }

      //if there are 2 exp
      //add second exp btn is not available
      else{
        experience1 = (
          <div className="experience1">
            <Experience isEditing={true}/>
            <button key={3} onClick={this.onExperienceEdit.bind(this, 3)}>submit</button>
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
            <Experience isEditing={false}/>
            <button key={3} onClick={this.onExperienceEdit.bind(this, 3)}>edit experience</button>
            <button onClick={this.onExperienceAdd.bind(this)}>add secondary experience</button>
          </div>
        )
      }

      //there are 2 exp
      //second exp button is not available
      else{
        experience1 = (
          <div className="experience1">
            <Experience isEditing={false}/>
            <button key={3} onClick={this.onExperienceEdit.bind(this, 3)}>edit experience</button>
          </div>
        )
      }
   
    }

    /////EDITING EXPERIENCE 2
    if(this.state.isEditingExp2){
      experience2 = (
        <div className="experience2">
          <Experience isEditing={true}/>
          <button key={4} onClick={this.onExperienceEdit.bind(this, 4)}>submit</button>
          <button onClick={this.onExperienceRemove.bind(this)}>remove secondary experience</button>
        </div>
      )
    }

    ///// NOT EDITING EXPERIENCE 2
    else{
      experience2 = (
        <div className="experience2">
          <Experience isEditing={false}/>
          <button key={4} onClick={this.onExperienceEdit.bind(this, 4)}>edit experience</button>
          <button onClick={this.onExperienceRemove.bind(this)}>remove secondary experience</button>
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
       
        <div className="educations">
          {education1}
          {education2}
        </div>

        <div className="experiences">
          {experience1}
          {experience2}
        </div>

      </div>
    )
  }


}

export default App;
