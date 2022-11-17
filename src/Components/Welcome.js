import React from 'react';


function Welcome({newName, solarSystem}) {
    return(
        <div>
            <h1>Welcome to</h1>
            <h1>{solarSystem}</h1>
       
            <h1>{newName}!</h1>


        </div>
    )
}

export default Welcome;

