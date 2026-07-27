import { useEffect, useState } from 'react';

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
			find countries{' '}
			<input
				type="text"
				value={newText}
				onChange={handelTextChanged}
			/>
		</>
	);
};

export default CountriesInput;
