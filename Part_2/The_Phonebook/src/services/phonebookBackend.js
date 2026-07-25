import axios from 'axios';

const url = 'http://localhost:3001/persons';

const getAll = () => axios.get(url).then((response) => response.data);

const create = (newPhonebook) =>
	axios.post(url, newPhonebook).then((responses) => responses.data);

export default { getAll, create };
