import React from 'react';
import uniqid from 'uniqid'



    class Overview extends React.Component{

        //delete function
        delete(id){
          this.props.delete(id)
          //id is the array element, or the name of the task
          console.log(id);
        }
      
        render(){
          return(
            <div>
                <ul>
                {this.props.tasks.map(task => 
                   //using map to create a li element for each submitted task
                        <li key={uniqid}>
                            {task}
                            <button onClick={this.delete.bind(this, task)}>delete</button>
                        </li>
                    
                )}
               </ul>
            </div>
          )
        }
      }

    

export default Overview;