const express = require('express');
const app = express();

app.use(express.json());

let phoneNumbers = [
	{
		id: 'f%v#F6VKYt',
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: '3UvLiEys%J',
		name: 'Ada Lovelace',
		number: '39-44-5323523',
	},
	{
		id: 'vg_#%YEpuV',
		name: 'Dan Abramov',
		number: '12-43-234345',
	},
	{
		id: '584PZTtJRt',
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
	},
];

const infoPage = `
<div>
	<p>Phonebook has info for ${phoneNumbers.length} people </p>
	<p>${new Date()}</p>
</div>`;

const GenerateRandomID = () => {
	const IDkeys =
		'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-#&%_';
	const idLength = 10;
	let ID = '';

	for (let index = 0; index < idLength; index++) {
		ID += IDkeys[Math.floor(Math.random() * IDkeys.length)];
	}

	if (phoneNumbers.find((number) => number.id === ID)) {
		GenerateRandomID();
	} else return ID;
};

// get requests.
app.get('/api/persons', (request, response) => {
	response.json(phoneNumbers);
});

app.get('/info', (request, response) => {
	response.send(infoPage);
});

app.get('/api/persons/:id', (request, response) => {
	const id = request.params.id;
	const number = phoneNumbers.find((num) => num.id === id);

	if (number) {
		response.json(number);
	} else response.status(404).end();
});

// delete request

app.delete('/api/persons/:id', (request, response) => {
	const id = request.params.id;
	phoneNumbers = phoneNumbers.filter((number) => number.id !== id);

	response.status(204).end();
});

// post request

app.post('/api/persons', (request, response) => {
	body = request.body;

	if (!body.name) {
		return response.status(400).json({
			error: 'name is missing',
		});
	} else if (!body.number) {
		return response.status(400).json({
			error: 'number is missing',
		});
	} else if (phoneNumbers.find((number) => number.name === body.name)) {
		return response.status(400).json({
			error: 'name must be unique',
		});
	}

	const data = {
		id: GenerateRandomID(),
		name: body.name,
		number: body.number,
	};

	phoneNumbers = phoneNumbers.concat(data);
	response.json(data);
});

const PORT = 3001;

app.listen(PORT, () => {
	console.log('opening a port in', PORT);
});
