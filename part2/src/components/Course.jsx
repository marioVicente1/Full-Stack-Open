import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
  return (
    <div>
      <h1>
        <Header course={course.name} />
      </h1>
      <Content parts={course.parts} />
    </div>
  )
}

export default Course
