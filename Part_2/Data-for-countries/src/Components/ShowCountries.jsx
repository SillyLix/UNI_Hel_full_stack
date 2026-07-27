import backend from '../services/backend';
import { useState, useEffect } from 'react';
import './showCountries.css';

const ShowCountryFullInfo = ({ country }) => {
	console.log(country);
	const [tempInfo, setTempInfo] = useState({
		coord: {
			lon: 178.42,
			lat: -18.13,
		},
		weather: [
			{
				id: 803,
				main: 'Clouds',
				description: 'broken clouds',
				icon: '04n',
			},
		],
		base: 'stations',
		main: {
			temp: 21.02,
			feels_like: 20.82,
			temp_min: 21.02,
			temp_max: 21.02,
			pressure: 1015,
			humidity: 63,
			sea_level: 1015,
			grnd_level: 1012,
		},
		visibility: 10000,
		wind: {
			speed: 5.13,
			deg: 162,
			gust: 6.49,
		},
		clouds: {
			all: 81,
		},
		dt: 1785170169,
		sys: {
			country: 'FJ',
			sunrise: 1785177303,
			sunset: 1785217822,
		},
		timezone: 43200,
		id: 2198148,
		name: 'Suva',
		cod: 200,
	});

	const lat = country.capitalInfo.latlng[0];
	const lon = country.capitalInfo.latlng[1];

	useEffect(() => {
		backend
			.getWeather(lat, lon)
			.then((response) => {
				console.log('weather:', response);

				setTempInfo(response);
			})
			.catch(() => alert('wether forecast was not working!'));
	}, [lat, lon]);
	const iconLink = `https://openweathermap.org/payload/api/media/file/${tempInfo.weather[0].icon}.png`;
	return (
		<div>
			<div>
				<h1>{country.name.common}</h1>
				Capital: {country.capital} <br />
				Area: {country.area}
			</div>
			<div>
				<h1>Languages</h1>

				{Object.entries(country.languages).map(([key, value]) => (
					<p key={key}>{value}</p>
				))}
			</div>

			<img
				className="flagImg"
				src={country.flags.svg}
				alt={country.flags.alt}
			/>

			<div>
				<h1>Weather in {country.name.common}</h1>
				<p>Temperature {tempInfo.main.temp}</p>
				<p>feels like {tempInfo.main.feels_like}</p>
				<img
					src={iconLink}
					alt="weather icon"
				/>
				<p>
					wind {tempInfo.wind.speed} m/s, weather: {tempInfo.weather[0].main}
				</p>
			</div>
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
