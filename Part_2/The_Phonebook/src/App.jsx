import { useState } from 'react';
import RenderNumbers from './components/RenderNumbers';
import Form from './components/Form';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);

	return (
		<div>
			<h2>Phonebook</h2>
			<Form
				persons={persons}
				setPersons={setPersons}
			/>
			<h2>Numbers</h2>
			<RenderNumbers nameArr={persons} />
		</div>
	);
};

export default App;
