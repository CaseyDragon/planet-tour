import React, {useState }from 'react';
import './App.css';
import Welcome from './Components/Welcome.js';
import AstroName from './Components/AstroName.js';
import SolarSystemView from './Components/SolarSystemView.js';


function App() {
const [newName, setNewName]= useState("Astronaut")

const [nameChoosen, setNameChoosen] = useState(false);

const addName= (e) => {
  e.preventDefault();
  setNameChoosen(true);

}


  return (
    <div className="App">
    <Welcome
      newName={newName}
    />
  
      <AstroName 
        newName={newName}
        setNewName ={setNewName}
        addName= {addName}
        />
   <SolarSystemView />
    </div>
  );
}


export default App;
