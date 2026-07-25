const Persons = ({ person, onDeleteClicked }) => {
	console.log(person);

	return (
		<p>
			{person.name}, {person.number}{' '}
			<button onClick={onDeleteClicked}>delete</button>
		</p>
	);
};
export default Persons;
