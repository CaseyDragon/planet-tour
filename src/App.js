import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState} from 'react';
import './App.css';
import Welcome from './Components/Welcome.js';
import AstroName from './Components/AstroName.js';
import SolarSystemView from './Components/SolarSystemView.js';
import Planet from './Components/Planet.js'



function App() {
 
const [newName, setNewName]= useState("Astronaut");
return(
  <BrowserRouter>
  <Routes>
       <Route path = "astroname" element={<AstroName />} />
       <Route path = "solarsystemview" element={<SolarSystemView />} />
       <Route path = "welcome" element={<Welcome />} />
       <Route path = "/solarsystemview/:planet" element={<Planet />} />
   </Routes>
  
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
</BrowserRouter>
); 

}

export default App;
