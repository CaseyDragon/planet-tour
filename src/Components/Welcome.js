import React from 'react';

function Welcome({newName}) {
    return(
        <div>
            <h1>Welcome to</h1>
            <h1>the Universe</h1>
            {/* i want this to change to the planet name */}
            <h1>{newName}!</h1>
            {/* {useState of name ? setname : "astronaut"} 
            i want this to change to the name entered */}


        </div>
    )
}

export default Welcome;

