import React, { Component } from 'react';
import Overview from "./components/Overview";

class App extends Component {
  constructor(){
    super();

    this.state = {
      task: "",
      tasks: [],
    };

    //bind the delete
    this.delete = this.delete.bind(this);
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

  //checking prev state to compare what needs to be removed
  //from tasks, and setting the state's tasks as an updated one
  //id = the specific task, what is submitted
  delete(id){
    this.setState(
      prevState => ({
        tasks: prevState.tasks.filter(task => task !== id) 
    }));
  }
 

  render(){
    const{task} = this.state;

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

        <Overview delete={this.delete} tasks={this.state.tasks}/>


      </div>

    );
  }

}



export default App;
