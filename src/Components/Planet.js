import React from 'react';

function Planet({planet}) {
    return(
        <div className = 'planetFacts'>
            <div className='name'>{planet.name}</div>
            <div className= 'picture'>{planet.imgSrc}</div>
            <div className ='facts'> {planet.description}</div>
            <div className = "number">{planet.planetOrder}</div>
            <button>lets pretend im a rocket ship that goes back to the solare system</button>
        </div>
    )
}

export default Planet;