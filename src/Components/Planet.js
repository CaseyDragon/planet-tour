import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';


function Planet({planets}) {
    const navigate = useNavigate();
    const {planet} = useParams()
    let showPlanet = planets.filter(celBody => celBody.name===planet)
console.log(planet, showPlanet)
const spaceRock = showPlanet.map((rock)=> {
    console.log(rock.imgSrc[0].img)
    return(
        <>
        <div className='name'>{rock.name}</div>
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