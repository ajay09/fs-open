import React from 'react'

const Header = (props) => {
  console.log(props.course)
  return (
      <>
      {console.log(props.course)}
      <h1>{props.course}</h1>
      </>
  )
}

const Part = (props) => {
  return (
    <p>{props.val.name} {props.val.exercises}</p>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach((value) => {
        sum = sum + value.exercises
      })
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part val={props.parts[0]} />
      <Part val={props.parts[1]} />
      <Part val={props.parts[2]} />
    </div>
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
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App