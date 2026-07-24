import { useState } from 'react';

const Form = ({ persons, setPersons }) => {
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
			(element) => element.name === newName,
		);

		if (filteredPersons.length === 0) {
			setPersons(persons.concat({ name: newName, number: newNumber }));
		} else window.alert(`${newName} is already added to phonebook`);
	};

	const handleNameInputChange = (event) => {
		console.log(event.target.value);

		setNewName(event.target.value);
	};

	const handleNumberInputChange = (event) => {
		console.log(event.target.value);

		setNewNumber(event.target.value);
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

export default Form;
