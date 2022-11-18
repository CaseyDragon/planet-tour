
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GoBack from './GoBack.js';



function SolarSystemView({ planets, loading, setSolarSystem, setUnnamed }) {


    return (
        <Fragment>
            <p className="pick">Where should we go?</p>
            <div className="orbit">
                <div className="theSun" />
                {loading &&
                    planets.map((planet) => {
                        setSolarSystem("the Universe")
                        return (
                            <div key={planet.name} className={planet.name} id={planet.id}>
                            <p className="hideName"><Link to={'/solarsystemview/' + planet.name}>{planet.name}</Link></p>
                                
                            </div>
                        )
                    }
                    )}
            </div>
            <div className='goHome'><Link to='/'><p onClick={() => setUnnamed(true)}><GoBack /></p></Link></div>
        </Fragment>
    )
}
export default SolarSystemView;
