const RenderNumbers = ({ phoneBookArr }) => {
	console.log('name Arr:', phoneBookArr);
	return (
		<>
			{phoneBookArr.map((element, i) => (
				<p key={i + '_' + element.name}>
					{element.name}, {element.number}
				</p>
			))}
		</>
	);
};

export default RenderNumbers;
