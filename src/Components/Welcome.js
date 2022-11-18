import React from 'react';


function Welcome({newName, solarSystem}) {
    return(
        <div className= "welcomeMessage">
            <p>Welcome to {solarSystem}, {newName}!</p>
        </div>
    )
}

export default Welcome;

