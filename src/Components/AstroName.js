
const AstroName = ({newName, setNewName, addName }) => {
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