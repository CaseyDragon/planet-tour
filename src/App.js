import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState} from 'react';
import axios from 'axios';
import './App.css';
import Welcome from './Components/Welcome.js';
import AstroName from './Components/AstroName.js';
import SolarSystemView from './Components/SolarSystemView.js';
import Planet from './Components/Planet.js'



function App() {
const [solarSystem, setSolarSystem] = useState("the Universe") 
const [newName, setNewName]= useState("Astronaut");
const [loading, setLoading]= useState(false)
const [planets, setPlanets]= useState([])

const getPlanets = {
  method: 'GET',
  url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list',
  headers: {
    'X-RapidAPI-Key': '2d1bb0d53fmsh47470deb9c91173p143b5bjsn9620ab6bef18',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
};

axios.request(getPlanets).then(function (response) {
        // console.log(response.data);
        setPlanets(response.data);
        setLoading(true);

}).catch(function (error) {
	console.error(error);
})

return(
  <BrowserRouter>
 <div className="App">
    <Welcome
          newName={newName}
          solarSystem={solarSystem}
      />
  <Routes>
       <Route path = "solarsystemview" element={<SolarSystemView planets={planets} loading={loading}/>} />
       <Route path = "/"  />
       <Route path = "/solarsystemview/:planet" element={<Planet planets={planets} solarSystem={solarSystem} setSolarSystem={setSolarSystem}/>} />
   </Routes>
  
 


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
