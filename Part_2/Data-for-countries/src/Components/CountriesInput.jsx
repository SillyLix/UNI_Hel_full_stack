import { useState } from 'react';
import './input.css';

const CountriesInput = ({ countries, setFilteredCountries }) => {
	const [newText, setNewText] = useState('');

	const handelTextChanged = (event) => {
		setNewText(event.target.value);

		setFilteredCountries(
			countries.filter((country) =>
				country.name.common
					.toUpperCase()
					.includes(event.target.value.toUpperCase()),
			),
		);
	};

	return (
		<>
			<h2>find countries: </h2>
			<input
				className="inputFiled"
				type="text"
				value={newText}
				onChange={handelTextChanged}
			/>
		</>
	);
};

export default CountriesInput;
