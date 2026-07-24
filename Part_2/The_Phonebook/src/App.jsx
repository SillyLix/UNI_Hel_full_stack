import { useState } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filteredPersons, setFilteredPerson] = useState([]);

	const getDataHook = () => {
		axios.get('http://localhost:3001/persons').then((response) => {
			setPersons(response.data);
			setFilteredPerson(response.data);
		});
	};

	useEffect(getDataHook, []);

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
