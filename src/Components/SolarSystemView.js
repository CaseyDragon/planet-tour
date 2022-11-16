
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
// import Planet from './Planet.js'


function SolarSystemView({planets, loading}) {
  
   
   return (
        <Fragment>
             <div className="orbit">
                {loading && 
                planets.map((planet)=> {
                    return(
                        <div key ={planet.name} className = "planet" id= 'planet.id'>
                        <Link to ={'/solarsystemview/' + planet.name}>{planet.name}</Link>
                        </div>
                        )
            //    <Planet planet={planet}/>
           
                }
                
                )}
            </div>
            <h1>Where should we go?</h1>
            {/* i want to use the api ids as the ids for divs for the planets 
            and use that to name the planets and go to the planet pages
            i think i need to map the results to do this*/}
        </Fragment>
    )
}
export default SolarSystemView;
