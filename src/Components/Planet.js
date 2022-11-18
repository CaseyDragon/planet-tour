import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import GoBack from './GoBack.js';


function Planet({planets, setSolarSystem}) {
    const navigate = useNavigate();
    const {planet} = useParams()
    let showPlanet = planets.filter(celBody => celBody.name===planet)

const spaceRock = showPlanet.map((rock)=> {
   setSolarSystem(rock.name)
    return(
        <div className="planetFacts">

        <div className="topRow">
            <div className= 'picture'><img src={rock.imgSrc[0].img} alt='planet'/></div>
            <div className = "planetNumber"><p className='number'>{rock.planetOrder}</p><p>Planet Position</p></div>
        </div>
        <div className='bottomRow' > 
            <div className ='facts'> {rock.description}</div> 
        </div>
        </div>
    )
})
    


        return(

        <div className = 'planetPage'>
           {spaceRock}
            <p onClick={(e)=> navigate(-1)}><GoBack /></p>
        </div>
    )
}

export default Planet;