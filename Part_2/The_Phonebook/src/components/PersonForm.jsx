import { useState } from 'react';
import phonebookBackend from '../services/phonebookBackend';

const PersonForm = ({ persons, setPersons, setFilteredPersons }) => {
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const onAddButtonClicked = (event) => {
		console.log(event);
		event.preventDefault();

		// warn if empty field and don't move forward
		if (newName === '' || newNumber === '') {
			window.alert('name or number is empty. Fill in both of them.');
			return;
		}

		// check if the person exists and add if don't
		const filteredPersons = persons.filter(
			(element) => element.name.toLowerCase() === newName.toLowerCase(),
		);

		if (filteredPersons.length === 0) {
			const data = {
				name: newName,
				number: newNumber,
				id: persons.length + 1,
			};

			phonebookBackend.create(data).then((response) => {
				setPersons(persons.concat(data));
			});
		} else window.alert(`${newName} is already added to phonebook`);
	};

	const handleNameInputChange = (event) => setNewName(event.target.value);

	const handleNumberInputChange = (event) => setNewNumber(event.target.value);

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
				number:{' '}
				<input
					type="text"
					value={newNumber}
					onChange={handleNumberInputChange}
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

export default PersonForm;
