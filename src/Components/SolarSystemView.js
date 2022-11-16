import axios from 'axios';
import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Planet from './Planet.js'


function SolarSystemView() {
    // useEffect(()=>{
    //     getPlanets();
    // },[])
    
    const [planets, setPlanets]= useState([])
    const [loading, setLoading]= useState(false)
    

const getPlanets = {
  method: 'GET',
  url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list',
  headers: {
    'X-RapidAPI-Key': '2d1bb0d53fmsh47470deb9c91173p143b5bjsn9620ab6bef18',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
};

axios.request(getPlanets).then(function (response) {
        // console.log(response.data);
        setPlanets(response.data);
        setLoading(true);

}).catch(function (error) {
	console.error(error);
});
      

   return (
        <Fragment>
            {loading && 
            planets.map((planet)=> {
                return(
                <div key ={planet.name} className = "planet" id= 'planet.id'>
                      <Link to ={'/solarsystemview/' + planet.name}>hey</Link>
                </div>
                )
               <Planet planet={planet}/>
                // console.log(planet.name)
            }
                
            )}
            <div className="orbit"></div>
            <h1>Where should we go?</h1>
            {/* i want to use the api ids as the ids for divs for the planets 
            and use that to name the planets and go to the planet pages
            i think i need to map the results to do this*/}
        </Fragment>
    )
}
export default SolarSystemView;
