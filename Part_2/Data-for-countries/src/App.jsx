import { useState, useEffect } from 'react';
import ShowCountries from './Components/ShowCountries';
import CountriesInput from './Components/CountriesInput';
import backend from './services/backend';

function App() {
	const [countries, setCountries] = useState([]);
	const [filteredCountries, setFilterCountries] = useState([]);

	useEffect(() => {
		backend.getAll().then((response) => {
			setCountries(response);
		});
	}, []);

	return (
		<div>
			<CountriesInput
				countries={countries}
				setFilteredCountries={setFilterCountries}
			/>
			<ShowCountries
				filteredCountries={filteredCountries}
				setFilterCountries={setFilterCountries}
			/>
		</div>
	);
}

export default App;
