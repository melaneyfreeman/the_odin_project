import React from 'react';

const Overview = (props) => {
    const {tasks} = props;

    /*handleRemove(id){
        this.setState({
          tasks: this.state.tasks.filter((task) => task.id !== id),
          task: "",
        })
      }
      */

    return (
        <ul>
            {tasks.map((task, i) => {
                return (
                    <div>                
                        <ul key={i}><span>{i + ": " + task}</span><button key={i}>delete</button></ul>
                        
                    </div>
                
                )
            })}
        </ul>
    );
};

export default Overview;