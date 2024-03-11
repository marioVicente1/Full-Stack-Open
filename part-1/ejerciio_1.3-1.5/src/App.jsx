const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Total = ({ part1, part2, part3 }) => {
  return <p> Number od exercises {part1 + part2 + part3}</p>
}

const Part = ({ part }) => {
  return <div>{part}</div>
}

const Content = ({}) => {
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
      <Part part={course.parts[0].name} />
      <Part part={course.parts[1].name} />
      <Part part={course.parts[2].name} />
    </div>
  )
}

function App() {
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
      <Header course={course.name} />

      <Content />

      <Total
        part1={course.parts[0].exercises}
        part2={course.parts[1].exercises}
        part3={course.parts[2].exercises}
      />
    </div>
  )
}

export default App
