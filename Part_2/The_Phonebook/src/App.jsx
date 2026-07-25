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
			<Persons phoneBookArr={filteredPersons} />
		</div>
	);
};

export default App;
