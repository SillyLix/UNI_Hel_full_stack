import { useState } from 'react';

const Form = ({ persons, setPersons }) => {
	const [newName, setNewName] = useState('');

	const onAddButtonClicked = (event) => {
		console.log(event);
		event.preventDefault();

		const filteredPersons = persons.filter(
			(elemnet) => elemnet.name === newName,
		);

		if (filteredPersons.length === 0) {
			setPersons(persons.concat({ name: newName }));
		} else window.alert(`${newName} is already added to phonebook`);
	};

	const handleNameInputChange = (event) => {
		console.log(event.target.value);

		setNewName(event.target.value);
	};

	return (
		<form>
			<div>
				name:{' '}
				<input
					type="text"
					value={newName}
					onChange={handleNameInputChange}
				/>
			</div>
			<div>
				<button
					type="submit"
					onClick={onAddButtonClicked}
				>
					add
				</button>
			</div>
		</form>
	);
};

export default Form;
