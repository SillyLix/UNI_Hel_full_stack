import axios from 'axios';

const URL = 'https://studies.cs.helsinki.fi/restcountries/api/all';
const CountryURL = 'https://studies.cs.helsinki.fi/restcountries/api/name/';

const getAll = () => {
	return axios.get(URL).then((response) => response.data);
};

const getCountry = (name) => {
	return axios.get(CountryURL + name).then((response) => response.data);
};

const getWeather = (lat, lon) => {
	return axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=` +
				import.meta.env.VITE_WEATHER_API,
		)
		.then((response) => response.data);
};

export default {
	getAll,
	getCountry,
	getWeather,
};
