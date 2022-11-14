import React from 'react';
import './App.css';
import Welcome from './Components/Welcome.js';
import AstroName from './Components/AstroName.js';
import SolarSystemView from './Components/SolarSystemView.js';


function App() {
  return (
    <div className="App">
    <Welcome />
    <AstroName />
    {/* will need a conditional to switch to the glaaxy */}
    <SolarSystemView/>
    </div>
  );
}


export default App;
