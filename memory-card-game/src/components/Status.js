import React from 'react';

const Status = ({didLose, didWin}) => {



    if(didLose === true){
        return (
            <div className="blinking">
                <h1>YOU LOSE</h1>
                <h2 className="info">click a card to start a new game</h2>

            </div>
        )
    }
 

    else if(didWin === true){
        return(
            <div className="blinking">
                <h1>YOU WON</h1>
                <h2 className="info">click a card to start a new game</h2>
            </div>
        )
    }

    else{
        return(
            <div className="blinking">
                <h1>KEEP GOING</h1>
            </div>
        )
    }
  
}

export default Status;