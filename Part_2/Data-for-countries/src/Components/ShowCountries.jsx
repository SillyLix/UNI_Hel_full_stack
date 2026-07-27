const ShowCountryFullInfo = ({ country }) => {
	console.log('inside the country');

	console.log(country);

	return (
		<div>
			<h1>{country.name.common}</h1>
			<div>
				Capital {country.capital} <br />
				Area {country.area}
			</div>
			<h1>Languages</h1>

			<ul>
				{Object.entries(country.languages).map(([key, value]) => (
					<li key={key}>{value}</li>
				))}
			</ul>

			<img
				src={country.flags.png}
				alt={country.flags.alt}
			/>
		</div>
	);
};

const ShowCountries = ({ filteredCountries, setFilterCountries }) => {
	const handleShowBtnClick = (country) => {
		console.log(country);
		const listOfCountry = [country];
		setFilterCountries(listOfCountry);
	};

	if (filteredCountries.length === 0) {
		return <div>Write something in 'find countries</div>;
	} else if (filteredCountries.length === 1) {
		return (
			<ShowCountryFullInfo
				country={filteredCountries[0]}
				key={filteredCountries[0].cca3}
			/>
		);
	} else if (filteredCountries.length < 10 && filteredCountries.length > 0) {
		return (
			<div>
				{filteredCountries.map((country) => (
					<p key={country.cca3}>
						{country.name.common}{' '}
						<button onClick={() => handleShowBtnClick(country)}>Show</button>
					</p>
				))}
			</div>
		);
	} else {
		return <div>Too many matches, specify another filter</div>;
	}
};
export default ShowCountries;
