import React, { Component } from 'react';
import './App.css';
import './components/General';
import General from './components/General';

class App extends Component {
  constructor(){
    super();

    this.state = {
      isEditingGen: true
    };
  
  }
  
  onGeneralEdit(){
    this.setState({
      isEditingGen: !this.state.isEditingGen
    });
    console.log(this.state.isEditingGen)
  }

  
  render(){ 
    let general = "";
    if(this.state.isEditingGen){
      general = (
        <div>
          <General isEditing={true}/>
          <button onClick={this.onGeneralEdit.bind(this)}>submit</button>
        </div>
      );
    }

    else{
      general = (
        <div>
          <General isEditing={false}/>
          <button onClick={this.onGeneralEdit.bind(this)}>edit</button>
      </div>
      );
    }
    
    return(
      <div className="App">
        {general}
      </div>
    )
 
  }
}

export default App;
