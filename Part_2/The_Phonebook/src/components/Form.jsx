import { useState } from "react";

const Form = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('');

    const onAddButtonClicked = event => {
    console.log(event);
    event.preventDefault();

    setPersons(persons.concat({ name: newName }));
  };

  const handleNameInputChange = event => {
    console.log(event.target.value);
    
    setNewName(event.target.value);
    };
    
    return (
        <form>
        <div>
          name: <input type="text" value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          <button type="submit" onClick={onAddButtonClicked}>add</button>
        </div>
      </form>
    )
}

export default Form