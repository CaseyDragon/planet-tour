import React from 'react'

import PlanetName from './PlanetName.js';

function SolarSystemView() {
    return (
        <div>
            <PlanetName/>
            <h1>Where should we go?</h1>
            {/* i want to use the api ids as the ids for divs for the planets 
            and use that to name the planets and go to the planet pages
            i think i need to map the results to do this*/}
        </div>
    )
}
export default SolarSystemView;