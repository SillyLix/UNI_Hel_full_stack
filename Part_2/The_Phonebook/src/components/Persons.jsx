const Persons = ({ phoneBookArr }) => {
	return (
		<div>
			{phoneBookArr.map((element) => (
				<p key={element.id}>
					{element.name}, {element.number}
				</p>
			))}
		</div>
	);
};

export default Persons;
