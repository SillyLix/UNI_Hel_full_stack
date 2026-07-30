const express = require('express');
const app = express();

app.use(express.json());

const phoneNumber = [
	{
		id: '1',
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: '2',
		name: 'Ada Lovelace',
		number: '39-44-5323523',
	},
	{
		id: '3',
		name: 'Dan Abramov',
		number: '12-43-234345',
	},
	{
		id: '4',
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
	},
];

const infoPage = `
<div>
	<p>Phonebook has info for ${phoneNumber.length} people </p>
	<p>${new Date()}</p>
</div>`;

app.get('/api/persons', (request, response) => {
	response.json(phoneNumber);
});

app.get('/info', (request, response) => {
	response.send(infoPage);
});

app.get('/api/persons/:id', (request, response) => {
	const id = request.params.id;
	const number = phoneNumber.find((num) => num.id === id);

	if (number) {
		response.json(number);
	} else response.status(404).end();
});

const PORT = 3001;

app.listen(PORT, () => {
	console.log('opening a port in', PORT);
});
