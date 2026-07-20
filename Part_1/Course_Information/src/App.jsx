const Header = (props) => {

  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  let contents = [];
  let keyOfItem;

  props.course.parts.forEach((element, index) => {
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

const Total = (props) => {
  console.log(props);
  let totalNum = 0;

  props.course.parts.forEach(element => {
    totalNum += element.exercises;
  });

  return (
    <p>
        Number of exercises {totalNum}
    </p>
  )
}

const Part = (props) => {
  return (
    <p>{ props.name} { props.exercise }</p>
   
  )
}

const App = () => {

const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total  course={course}/>
    </div>
  )
}

export default App;