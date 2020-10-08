import React, { Component } from 'react';
import Overview from "./components/Overview";

class App extends Component {
  constructor(){
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    //call this because we don't want the default behavior
    //of refreshing the form anytime we submit it
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };

 

  render(){
    const{task, tasks} = this.state;

    return (
    
      <div>
        <div>
          <form onSubmit={this.onSubmitTask}>
            <label htmlFor="taskInput">Enter a task:</label>
            <input 
              type="text" 
              id="taskInput"
              onChange={this.handleChange}
              value={task}  
            />

            <button type="submit">Add task</button>
          </form>
        </div>


        <Overview tasks={tasks}/>
      </div>

    );
  }

}

export default App;
