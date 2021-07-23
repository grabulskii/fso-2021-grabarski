import React, {useState} from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => (
  <tr>
    <td>{props.name}</td> <td>{props.value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  let sum = good + neutral + bad

  if (sum === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <Statistic name='good' value={good} />
      <Statistic name='neutral' value={neutral} />
      <Statistic name='bad' value={bad} />
      <Statistic name='all' value={sum} />
      <Statistic name='average' value={(good - bad) / (sum)} />
      <Statistic name='positive' value={(good * 100 / (sum)) + '%'} />
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
