
const AstroName = ({newName, setNewName}) => {
    const addName= (e) => {
        e.preventDefault();
      

        // find a way to hide the input
       
      
      } 
    
    return(
   <div>
        <form className="nameYourAstro">
            <label>What's your Name?</label>
            <input type="text" name='name' value={newName} onChange={(e) => setNewName(e.target.value)}></input>
            <button type='submit' onClick={addName}>Let's Go!</button>
        </form>
    </div>
   )
}
export default AstroName;