const Total = ({ parts }) => {
    const sum = parts.reduce((a, b) => {
        return a + b.exercises
    }, 0);

    return (
    <p><strong>Total of {sum} exercises</strong></p>
    )
}
    
    
export default Total;