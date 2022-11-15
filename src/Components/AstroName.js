import React from 'react';
import { Link } from 'react-router-dom';


const AstroName = ({newName, setNewName}) => {
 
    
    return(
        <div>
                <h3>What's your Name?</h3>
                <input type="text" name='name' value={newName} onChange={(e) => setNewName(e.target.value)}></input>
                <Link to= 'solarsystemview'>
                     <button>Lets Go!</button>
                </Link>
        </div>
    )
}
export default AstroName;