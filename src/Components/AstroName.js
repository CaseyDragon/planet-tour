import React from 'react';
import { Link } from 'react-router-dom';
import RocketButton from './RocketButton.js';


const AstroName = ({ newName, setNewName, setUnnamed }) => {
    return (
        <div>
            <div className="nameBar">What's your Name?</div>

            <input type="text" className="nameSpot" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
            <Link to='solarsystemview'>
                <p className="pointer" onClick={() => setUnnamed(false)}><RocketButton /></p>
            </Link>
        </div>
    )
}

export default AstroName;