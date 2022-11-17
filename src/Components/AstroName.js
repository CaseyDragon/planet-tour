import React from 'react';
import { Link } from 'react-router-dom';
import RocketButton from './RocketButton.js';


const AstroName = ({newName, setNewName, setUnnamed}) => {
 
    
    return(
        <div>
           
                <h3>What's your Name?</h3>
                <input type="text" name='name' value={newName} onChange={(e) => setNewName(e.target.value)}></input>
                
                <Link to='solarsystemview'>
                     <p onClick={()=> setUnnamed(false)}><RocketButton /></p>
                </Link>
        </div> 
      
    )
}
export default AstroName;