import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState} from 'react';
import axios from "axios";
import './App.css';
import Welcome from './Components/Welcome.js';
import AstroName from './Components/AstroName.js';
import SolarSystemView from './Components/SolarSystemView.js';
import Planet from './Components/Planet.js'



function App() {
 
const options = {
  method: 'GET',
  url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list',
  headers: {
    'X-RapidAPI-Key': '2d1bb0d53fmsh47470deb9c91173p143b5bjsn9620ab6bef18',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

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
  
  </div>
</BrowserRouter>
); 

}

export default App;
