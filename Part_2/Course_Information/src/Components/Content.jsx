import Part from "./part";

const Content = ({ parts }) => {
    console.log(parts);
    
    return (
    
    <div>
        {parts.map((part, i) => <Part part={part} key={part.id} />)}
    </div>
);
}


export default Content;