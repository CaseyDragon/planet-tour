
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
// import Planet from './Planet.js'


function SolarSystemView({planets, loading, setSolarSystem, setUnnamed}) {
  
   
   return (
        <Fragment>
            <h1>Where to?</h1>
             <div className="orbit">

                {loading && 
                planets.map((planet)=> {
                    setSolarSystem("the Universe")
                    return(
                        <div key ={planet.name} className = "planet" id= {planet.id}>
                        <Link to ={'/solarsystemview/' + planet.name}>{planet.name}</Link>
                        </div>
                )}
                )}
            </div>
            <div className='goHome'><Link to = '/'><button onClick={()=> setUnnamed(true)}>Rocket Ship</button></Link></div>
        </Fragment>
    )
}
export default SolarSystemView;
