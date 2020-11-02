import React from 'react';

const Status = ({didLose, didWin}) => {

    if(didLose === true){
        return (
            <div className="scrollText">
                <h1>YOU LOSE</h1>
            </div>
        )
    }
 

    else if(didWin === true){
        return(
            <div className="scrollText">
                <h1>YOU WON</h1>
            </div>
        )
    }

    else{
        return(
            <div className="scrollText">
                <h1>KEEP GOING</h1>
            </div>
        )
    }
  
}

export default Status;