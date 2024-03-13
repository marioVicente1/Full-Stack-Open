import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} parts={part} />
      ))}
      <br />
      {`total of ${parts.reduce(
        (sum, part) => sum + part.exercises,
        0
      )} exercises`}
    </div>
  )
}

export default Content
