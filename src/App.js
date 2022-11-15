import React, {useState }from 'react';
import './App.css';

import Welcome from './Components/Welcome.js';
import AstroName from './Components/AstroName.js';
import SolarSystemView from './Components/SolarSystemView.js';



function App() {
const [newName, setNewName]= useState("Astronaut")


  return (

    <div className="App">
      
     
    <Welcome
      newName={newName}
    />
  
      <AstroName 
        newName={newName}
        setNewName ={setNewName}
        />
  <SolarSystemView />
    </div>

  );
}


export default App;
