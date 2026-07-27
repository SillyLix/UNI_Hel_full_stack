const ShowCountries = ({ filteredCountries }) => {
	if (filteredCountries.length === 0) {
		return <div>Write something in 'find countries</div>;
	} else if (filteredCountries.length === 1) {
		return (
			<div>
				{filteredCountries.map((country) => (
					<div key={country.cca3}>
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
				))}
			</div>
		);
	} else if (filteredCountries.length < 10 && filteredCountries.length > 0) {
		return (
			<div>
				{filteredCountries.map((country) => (
					<p key={country.cca3}>{country.name.common}</p>
				))}
			</div>
		);
	} else {
		return <div>Too many matches, specify another filter</div>;
	}
};

export default ShowCountries;
