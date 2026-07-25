import axios from 'axios';

const url = 'http://localhost:3001/persons';

const getAll = () => axios.get(url).then((response) => response.data);

const create = (newPhonebook) =>
	axios.post(url, newPhonebook).then((responses) => responses.data);

const delatePhone = (deletingID) => axios.delete(url + `/${deletingID}`);
export default { getAll, create, delatePhone };
