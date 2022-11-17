
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
// import Planet from './Planet.js'


function SolarSystemView({planets, loading}) {
  
   
   return (
        <Fragment>
            <h1>Where to?</h1>
             <div className="orbit">

                {loading && 
                planets.map((planet)=> {
                    return(
                        <div key ={planet.name} className = "planet" id= 'planet.id'>
                        <Link to ={'/solarsystemview/' + planet.name}>{planet.name}</Link>
                        </div>
                        )
         
           
                }
                
                )}
            </div>
        </Fragment>
    )
}
export default SolarSystemView;
