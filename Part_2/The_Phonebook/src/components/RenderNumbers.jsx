const RenderNumbers = ({ nameArr }) => {
	console.log('name Arr:', nameArr);
	return (
		<>
			{nameArr.map((name, i) => (
				<p key={i + '_' + name}>{name.name}</p>
			))}
		</>
	);
};

export default RenderNumbers;
