import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import phonebookBackend from './services/phonebookBackend';

const App = () => {
	// adding persons and filtered persons so the app would update when changed. '
	// The reason for two is that I wanted to save the filtered people deferent
	const [persons, setPersons] = useState([]);
	const [filteredPersons, setFilteredPerson] = useState([]);

	// get data from server
	useEffect(() => {
		phonebookBackend.getAll().then((info) => {
			setPersons(info);
			setFilteredPerson(info);
		});
	}, []);

	// delete phone number
	const onDeleteButtonClicked = (id) => {
		console.log('delete pressed:', id);

		persons.map((person) => {
			if (person.id === id) {
				if (window.confirm(`delete ${person.name}`)) {
					phonebookBackend
						.delatePhone(person.id)
						.then(
							setPersons(() =>
								persons.filter((filterPerson) => filterPerson !== person),
							),
						)
						.catch(alert(`${person.name} doesn't exit on server`));
				}
			}
		});
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				persons={persons}
				setFilteredPersons={setFilteredPerson}
			/>
			<h2>add a new</h2>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				setFilteredPersons={setFilteredPerson}
			/>
			<h2>Numbers</h2>

			{filteredPersons.map((person) => (
				<Persons
					key={person.id}
					person={person}
					onDeleteClicked={() => onDeleteButtonClicked(person.id)}
				/>
			))}
		</div>
	);
};

export default App;
