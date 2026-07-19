const Header = (prams) => {
  return (
    <div>
      <h1>{prams.courseName}</h1>
    </div>
  )
}

const Content = (prams) => {
  if (prams.exercise_Array.length != prams.part_array.length) {
    console.error("part_array and exercise_Array was not the same length when insetting Content")
  }

  let contents = [];

  for (let index = 0; index < prams.part_array.length; index++) {
    contents.push(
      <p key={index}>
      {prams.part_array[index]} {prams.exercise_Array[index]}
      </p>

    )
  }
      
  return (
    <div>
      {contents}
    </div>
  )
}

const Total = (prams) => {
  let totalNum = 0;
  for (let index = 0; index < prams.exercise_Array.length; index++) {
    totalNum += prams.exercise_Array[index];
  }

  return (
    <p>
        Number of exercises {totalNum}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const exerciseArray = [exercises1, exercises2, exercises3];
  const partArray = [part1, part2, part3];
  return (
    
    <div>
      <Header courseName={course} />
      <Content part_array={partArray} exercise_Array={exerciseArray} />
      <Total  exercise_Array={exerciseArray}/>
    </div>
  )
}

export default App;