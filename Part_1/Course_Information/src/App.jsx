const Header = (prams) => {

  return (
    <div>
      <h1>{prams.courseName}</h1>
    </div>
  )
}

const Content = (prams) => {
  console.log(prams);
  let contents = [];
  let keyOfItem;

  prams.parts.forEach((element, index) => {
    keyOfItem = 'parts_' + index;
    contents.push( 
      <Part key={keyOfItem} name={element.name} exercise={element.exercises} />
    )
  });
      
  return (
    <div>
      {contents}
    </div>
  )
}

const Total = (prams) => {
  console.log(prams);
  let totalNum = 0;

  prams.parts.forEach(element => {
    totalNum += element.exercises;
  });

  return (
    <p>
        Number of exercises {totalNum}
    </p>
  )
}

const Part = (prams) => {
  return (
    <p>{ prams.name} { prams.exercise }</p>
   
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total  parts={parts}/>
    </div>
  )
}

export default App;