import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}: </td>
      <td>{value}: </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [bad, setbad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClick = (value, setFunction, score) => {
    setFunction(value + 1)
    const newAllClicks = all + 1
    setAll(newAllClicks)
    const newAverage = (good * 1 + bad * -1 + score) / newAllClicks
    setAverage(newAverage)
    const newPositive = ((good + (score === 1 ? 1 : 0)) / newAllClicks) * 100
    setPositive(newPositive)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => handleClick(good, setGood, 1)}>good</button>
        <button onClick={() => handleClick(neutral, setNeutral, 0)}>
          neutral
        </button>
        <button onClick={() => handleClick(bad, setbad, -1)}>bad</button>
      </div>

      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          average={average}
          all={all}
          positive={positive}
          bad={bad}
        />
      )}
    </div>
  )
}

export default App
