import './Notification.css';

const Notification = ({ note }) => {
	console.log(note);

	if (note === null) return;

	return <div className="note">{note}</div>;
};

export default Notification;
