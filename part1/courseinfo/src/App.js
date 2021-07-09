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
    <p>{props.part} {props.count}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1.name} count={props.part1.exercises} />
      <Part part={props.part2.name} count={props.part2.exercises} />
      <Part part={props.part3.name} count={props.part3.exercises} />
    </div>
  )
}


const Total = (props) => {
  return (
    <p>Number of exercises {props.count1 + props.count2 + props.count3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total count1={part1.exercises} count2={part2.exercises} count3={part3.exercises} />
    </div>
  )
}

export default App