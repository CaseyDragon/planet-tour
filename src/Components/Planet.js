import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';


function Planet({planets, setSolarSystem}) {
    const navigate = useNavigate();
    const {planet} = useParams()
    let showPlanet = planets.filter(celBody => celBody.name===planet)

const spaceRock = showPlanet.map((rock)=> {
   setSolarSystem(rock.name)
    return(
        <>
      
            <div className= 'picture'><img src={rock.imgSrc[0].img} alt='planet'/></div>
            <div className ='facts'> {rock.description}</div>
            <div className = "number">{rock.planetOrder}</div>
        </>
    )
})
    


        return(

        <div className = 'planetFacts'>
           {spaceRock}
            <button onClick={(e)=> navigate(-1)}>Rocket Ship</button>
        </div>
    )
}

export default Planet;